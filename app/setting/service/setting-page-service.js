 (function() {
     'use strict';

     /**
      * Get Shared module.
      */
     angular.module(appName)

     /**
      * Registration data service.
      */
     .factory('SettingService', SettingDataService)

     .factory('SettingDataService', SettingClientDataService)

     .factory('SettingPersistenceDataService', SettingPersistenceDataService);

     SettingDataService.$inject = ['SettingClientDataService'];

     function SettingDataService(SettingClientDataService) {
         var settingDataService = {

         };

        return settingDataService;
     }

     SettingClientDataService.$inject = ['$q', 'config'];

     function SettingClientDataService($q, config) {
         var settingClientDataService = {
         };
         return settingClientDataService;
     }

    SettingPersistenceDataService.$inject = [];

     function SettingPersistenceDataService() {
         var settingPersistenceDataService = {};
         return settingPersistenceDataService;
     }
 })();