(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('MessageController', Message);


    Message.$inject = ['$state', '$filter', '$http', 'config'];

    function Message($state, $filter, $http, config) {
        var messageVm = this;
        // Variable declarations
        messageVm.currentUser = {};
        messageVm.currentUser.email = "";
        messageVm.currentUser.password = "";

        messageVm.deleteMessage = deleteMessage;

        activate();


        function deleteMessage(message) {
            console.log(message);
            $http({
                method: "POST",
                url: config.API_URL.deleteMessage,
                data: {
                    messageId: message.id
                }
            }).then(function mySucces(response) {
                var api_result = response.data.result;
                if (api_result) {
                    console.log("Message deleted success");
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
                    url: config.API_URL.getMessages,
                    data: {
                        userId: config.userDetails.userId
                    }
                }).then(function mySucces(response) {
                    console.log(response.data);
                    var api_result = response.data.result;
                    if (api_result) {
                        console.log("messages fetching success");
                        console.log(response.data.payload);
                        messageVm.messages = response.data.payload;
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