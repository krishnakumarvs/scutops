(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Registration Controller.
         */
        .controller('ForgotPasswordController', ForgotPassword);

    ForgotPassword.$inject = ['$state', '$filter', 'config', '$http'];

    function ForgotPassword($state, $filter, config, $http) {
        var forgotPasswordVm = this;

        forgotPasswordVm.passwordss = passwordss;
        forgotPasswordVm.newUser = {};

        var confirmPassword = "";

        function passwordss() {
            console.log(forgotPasswordVm.newUser);
            if (forgotPasswordVm.newUser.use_name != "" && forgotPasswordVm.newUser.email_id != null) {
                $http({
                    method: "POST",
                    url: config.API_URL.forgotPassword,
                    data: {
                        name: forgotPasswordVm.newUser.use_name,
                        email_id: forgotPasswordVm.newUser.email_id
                    }
                }).then(function mySucces(response) {
                    var api_result = response.data.result;
                    if (api_result) {
                        console.log(response.data.payload);
                        $state.go('login');
                    } else {
                        alert(response.data.description);
                        forgotPasswordVm.newUser = {};
                    }
                }, function myError(response) {
                    console.log(response.statusText);
                });
            } else {
                alert("Enter both fields");
            }
            // forgotPasswordVm.newUser.use_name;
            // forgotPasswordVm.newUser.email_id;
        }
    }

})();