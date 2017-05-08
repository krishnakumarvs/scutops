(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Login Controller.
         */
        .controller('SettingController', Setting);


    Setting.$inject = ['$state', '$filter'];

    function Setting($state, $filter) {
        var settingVm = this;
        // Variable declarations
        settingVm.currentUser = {};
        settingVm.currentUser.email = "";
        settingVm.currentUser.password = "";

        // Function declarations
        settingVm.authinticateUser = authinticateUser;
        settingVm.Change = Change;
        settingVm.ChangeNotification = ChangeNotification;

        activate();

        function activate() {
            // To initialize anything before the project starts
        }


        function authinticateUser() {
            console.log("Clicked on authenticate user");
            $state.go('setting');
        }

        function Change() {
            $state.go('changePassword');
        }
        function ChangeNotification(){
            $state.go('changeNotification');
        }
    }

})();