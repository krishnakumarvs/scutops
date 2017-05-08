(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
    /**
     * Login Controller.
     */
    .controller('SettingsController', Settings);

    Settings.$inject = ['$state'];

    function Settings($state) {
        var loginVm = this;
    }

})();