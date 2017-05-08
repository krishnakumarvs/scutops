(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Registration Controller.
         */
        .controller('ForgotController', Forgott);

    Forgott.$inject = ['$state', '$filter', 'config', '$http'];

    function Forgott($state, $filter, config, $http) {
        var forgvm = this;

        forgvm.passwordss = passwordss;
        forgvm.newUser = {};
        forgvm.newUser.use_name = "";
        
        var confirmPassword = "";
        console.log("Inside Forg ");

        function passwordss() {
            console.log(forgvm.newUser);
            if (forgvm.newUser.use_name != "" && forgvm.newUser.email_id != null) {
                $http({
                    method: "POST",
                    url: config.API_URL.forgotPassword,
                    data: {
                        name: forgvm.newUser.use_name,
                        email_id: forgvm.newUser.email_id
                    }
                }).then(function mySucces(response) {
                    var api_result = response.data.result;
                    if (api_result) {
                        console.log(response.data.payload);
                        alert(response.data.description);
                        $state.go('login');
                    } else {
                        alert(response.data.description);
                        forgvm.newUser = {};
                    }
                }, function myError(response) {
                    console.log(response.statusText);
                });
            } else {
                alert("Enter both fields");
            }
            // forgvm.newUser.use_name;
            // forgvm.newUser.email_id;
        }
    }

})();