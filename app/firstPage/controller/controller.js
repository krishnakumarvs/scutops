(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('FirstPageController', FirstPage);

    FirstPage.$inject = ['$state', '$filter'];

    function FirstPage($state, $filter) {
        var firstPageVm = this;
        // Variable declarations
        firstPageVm.currentUser = {};
        //firstPageVm.currentUser.email = "";
        //firstPageVm.currentUser.password = "";

        // Function declarations
        firstPageVm.SignIn = SignIn;
        firstPageVm.SignUp = SignUp;

        activate();

        function activate() {
            // To initialize anything before the project starts
        }


        function SignIn() {
            //console.log("Clicked on authenticate user");
            $state.go('login');
        }

        function SignUp() {
            $state.go('registration');
        }
    }

})();