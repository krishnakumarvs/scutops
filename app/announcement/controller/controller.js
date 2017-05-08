(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('AnnouncementController', Announcement);


    Announcement.$inject = ['$state', '$filter', '$http', '$timeout', 'config'];

    function Announcement($state, $filter, $http, $timeout, config) {
        var announcementVm = this;
        // Variable declarations
        announcementVm.currentUser = {};
        announcementVm.currentUser.email = "";
        announcementVm.currentUser.password = "";

        // Function declarations
        announcementVm.showDetails = showDetails;
        announcementVm.SignUp = SignUp;

        activate();

        function activate() {
            if (!config.userDetails.name) {
                $state.go('login');
            } else {
                $http({
                    method: "POST",
                    url: config.API_URL.getAnnouncement,
                    data: {
                        userId: config.userDetails.userId
                    }
                }).then(function mySucces(response) {
                    var api_result = response.data.result;
                    if (api_result) {
                        console.log("Announcement fetching success");
                        console.log(response.data.payload);
                        announcementVm.allAnnouncement = response.data.payload;
                    } else {
                        alert(response.data.description);
                    }
                }, function myError(response) {
                    console.log(response.statusText);
                });
            }
        }


        function showDetails(announcement) {
            config.announcement = announcement;
            console.log("Clicked on authenticate user");
            $timeout(goNow, 100);

        }

        function goNow() {
            $state.go('announcementDetails');
        }

        function SignUp() {
            $state.go('registration');
        }
    }

})();