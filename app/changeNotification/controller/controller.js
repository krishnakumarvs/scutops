(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Registration Controller.
         */
        .controller('ChangeNotificationController', ChangeNotification);

    ChangeNotification.$inject = ['$state', '$filter', 'config', '$http'];

    function ChangeNotification($state, $filter, config, $http) {
        var changeNotificationVm = this;
       
        changeNotificationVm.passwordss = passwordss;
        changeNotificationVm.newUser = {};

        var confirmPassword = "";

        function passwordss() {
            
                            alert("successfull");
                            $state.go('home');
                           
        }
    }

})();