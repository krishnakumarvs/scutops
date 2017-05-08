 (function() {
     'use strict';

     /**
      * Get Shared module.
      */
     angular.module(appName)

     /**
      * Registration data service.
      */
     .factory('HelpDataService', HelpDataService)

     .factory('HelpClientDataService', HelpClientDataService)

     .factory('HelpPersistenceDataService', HelpPersistenceDataService);

     HelpDataService.$inject = ['HelpClientDataService'];

     function HelpDataService(HelpClientDataService) {
         var helpDataService = {

         };

        return helpDataService;
     }

     HelpClientDataService.$inject = ['$q', 'config'];

     function HelpClientDataService($q, config) {
         var helpClientDataService = {
         };
         return helpClientDataService;
     }

    HelpPersistenceDataService.$inject = [];

     function HelpPersistenceDataService() {
         var helpPersistenceDataService = {};
         return helpProfilePersistenceDataService;
     }
 })();