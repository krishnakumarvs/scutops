(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('AboutController', About);


    About.$inject = ['$state', '$filter'];

    function About($state, $filter) {
        var aboutVm = this;
        // Variable declarations
        aboutVm.currentUser = {};
        aboutVm.currentUser.email = "";
        aboutVm.currentUser.password = "";

        // Function declarations
        aboutVm.authinticateUser = authinticateUser;
        aboutVm.SignUp = SignUp;

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