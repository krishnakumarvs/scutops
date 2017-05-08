(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Registration Controller.
         */
        .controller('ChangePasswordController', ChangePassword);

    ChangePassword.$inject = ['$state', '$filter', 'config', '$http'];

    function ChangePassword($state, $filter, config, $http) {
        var changePasswordVm = this;
       
        changePasswordVm.passwordss = passwordss;
        changePasswordVm.newUser = {};

        var confirmPassword = "";

        function passwordss() {
            
                            alert("successfull");
                            $state.go('home');
                           
        }
    }

})();