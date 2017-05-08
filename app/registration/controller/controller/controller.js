(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Registration Controller.
         */
        .controller('RegistrationController', Registration);

    Registration.$inject = ['$state', '$filter', 'config', '$http'];

    function Registration($state, $filter, config, $http) {
        var registrationVm = this;
        registrationVm.confirmPassword = confirmPassword;
        registrationVm.addNewUser = addNewUser;
        registrationVm.newUser = {};

        var confirmPassword = "";

        function addNewUser() {
            console.log(registrationVm.newUser);
            if (registrationVm.newUser.password && registrationVm.newUser.password.length) {
                if (registrationVm.newUser.password == registrationVm.newUser.confirmPassword) {


                    $http({
                        method: "POST",
                        url: config.API_URL.registration,
                        data: {
                            name: registrationVm.newUser.name,
                            email_id: registrationVm.newUser.email_id,
                            password: registrationVm.newUser.password
                        }
                    }).then(function mySucces(response) {
                        console.log(response.data);
                        var api_result = response.data.result;
                        if (api_result) {
                            alert("Registration successfull");
                            $state.go('profile');
                            config.userDetails = response.data.payload;
                        } else {
                            alert(response.data.description);
                        }
                    }, function myError(response) {
                        console.log(response.statusText);
                    });



                } else {
                    alert("Incorrect passwords");
                    registrationVm.newUser.password = "";
                    registrationVm.newUser.confirmPassword = "";
                }
            } else {
                alert("Please enter a password");
            }

        }
    }

})();