(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('DashboardController', Dashboard);

    Dashboard.$inject = ['$state', '$filter', '$http', 'config', '$location', '$window'];

    function Dashboard($state, $filter, $http, config, $location, $window) {
        var loginVm = this;
        // Variable declarations
        loginVm.currentUser = {};
        loginVm.currentUser.email = ""; //manu@gmail.com
        loginVm.currentUser.password = ""; //mannu

        // Function declarations
        loginVm.authinticateUser = authinticateUser;
        loginVm.SignUp = SignUp;
        loginVm.ForgotPassword = ForgotPassword;
        loginVm.changeServerIp = changeServerIp;
        loginVm.gotoSetLocationPage = gotoSetLocationPage;

        activate();

        function gotoSetLocationPage() {
            /*$state.go("set-location");*/
            $location.path('/set-location');
            var url = "http://" + $window.location.host + "/scutops/index.html#/set-location";
            /*$log.log(url);*/
            $window.location.href = url;
        }

        function changeServerIp() {
            var newPrefix = window.prompt("Enter server url", config.prefix);
            if (newPrefix) {
                config.prefix = newPrefix;
                config.recalculateUrls(newPrefix);
                console.log(newPrefix);
                console.log(config.prefix);
            }
        }

        function activate() {
            // To initialize anything before the project starts
        }

        function authinticateUser() {
            console.log("Clicked on authenticate user " + config.API_URL.login);
            console.log(loginVm.currentUser);
            $http({
                method: "POST",
                url: config.API_URL.login,
                data: {
                    username: loginVm.currentUser.email,
                    password: loginVm.currentUser.password
                }
            }).then(function mySucces(response) {
                console.log(response.data);
                var api_result = response.data.result;
                if (api_result) {
                    console.log("Authentication success");
                    $state.go('home');
                    config.userDetails = response.data.payload;
                } else {
                    alert(response.data.description);
                }
            }, function myError(response) {
                console.log(response.statusText);
                alert(response.statusText)
            });

            //$state.go('home');
        }

        function SignUp() {
            $state.go('registration'); //change state go to app.module
        }


        function ForgotPassword() {
            /*$state.go('forgotPassword');*/
            $location.path('/forgot');
        }
    }

})();