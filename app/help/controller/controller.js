(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('HelpController', Help);


    Help.$inject = ['$state', '$filter'];

    function Help($state, $filter) {
        var helpVm = this;
        // Variable declarations
        helpVm.currentUser = {};
        helpVm.currentUser.email = "";
        helpVm.currentUser.password = "";

        // Function declarations
        helpVm.authinticateUser = authinticateUser;
        helpVm.SignUp = SignUp;

        activate();

        function activate() {
            // To initialize anything before the project starts
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