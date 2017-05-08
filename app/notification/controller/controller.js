(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('NotificationController', Notification);


    Notification.$inject = ['$state', '$filter', '$http', 'config'];

    function Notification($state, $filter, $http, config) {
        var notificationVm = this;
        // Variable declarations
        notificationVm.currentUser = {};
        notificationVm.currentUser.email = "";
        notificationVm.currentUser.password = "";

        notificationVm.deleteNotification = deleteNotification;

        activate();


        function deleteNotification(notification) {
            console.log(notification);
            $http({
                method: "POST",
                url: config.API_URL.deleteNotification,
                data: {
                    notificationId: notification.id
                }
            }).then(function mySucces(response) {
                var api_result = response.data.result;
                if (api_result) {
                    console.log("Notification deleted success");
                    activate();
                } else {
                    alert(response.data.description);
                }
            }, function myError(response) {
                console.log(response.statusText);
            });

        }

        function activate() {
            if (!config.userDetails.name) {
                $state.go('login');
            } else {
                $http({
                    method: "POST",
                    url: config.API_URL.getNotifications,
                    data: {
                        userId: config.userDetails.userId
                    }
                }).then(function mySucces(response) {
                    var api_result = response.data.result;
                    if (api_result) {
                        console.log("notifications fetching success");
                        console.log(response.data.payload);
                        notificationVm.notifications = response.data.payload;
                    } else {
                        alert(response.data.description);
                    }
                }, function myError(response) {
                    console.log(response.statusText);
                });
            }
        }

    }

})();