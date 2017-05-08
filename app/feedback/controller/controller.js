(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('FeedbackController', Feedback);


    Feedback.$inject = ['$state', '$filter', '$http', 'config'];

    function Feedback($state, $filter, $http, config) {
        var feedbackVm = this;
        // Variable declarations
        feedbackVm.currentUser = {};
        feedbackVm.sendFeedback = sendFeedback;
        feedbackVm.category = "Admin";

        feedbackVm.selectBoxChanged = selectBoxChanged;

        feedbackVm.showCompanyName = false;


        function selectBoxChanged() {
            console.log(feedbackVm.category);
            if (feedbackVm.category == "Company") {
                feedbackVm.showCompanyName = true;
            } else {
                feedbackVm.showCompanyName = false;
            }
        }
        // Function declarations
        feedbackVm.authinticateUser = authinticateUser;
        feedbackVm.SignUp = SignUp;

        activate();

        function activate() {
            // To initialize anything before the project starts
            if (!config.userDetails.name) {
                $state.go('login');
            }
        }

        function sendFeedback() {
            $http({
                method: "POST",
                url: config.API_URL.sendFeedback,
                data: {
                    userId: config.userDetails.userId,
                    feedbackSubject: feedbackVm.feedbackSubject,
                    feedbackDescription: feedbackVm.feedbackDescription,
                    feedbackTo: feedbackVm.category,
                    companyName: (feedbackVm.category == "Company") ? feedbackVm.companyName : null
                }
            }).then(function mySucces(response) {
                console.log(response.data);

                feedbackVm.feedbackSubject = "";
                feedbackVm.feedbackDescription = "";
                feedbackVm.feedbackTo = "";
                feedbackVm.companyName = "";

                var api_result = response.data.result;
                if (api_result) {
                    alert("Feedback posted successfully");
                } else {
                    alert(response.data.description);
                }
            }, function myError(response) {
                console.log(response.statusText);
            });
        }


        function authinticateUser() {
            console.log("Clicked on authenticate user");
            $state.go('home');
        }

        function SignUp() {
            $state.go('registration');
        }
    }

})();