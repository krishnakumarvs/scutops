 (function() {
     'use strict';

     /**
      * Get Shared module.
      */
     angular.module(appName)

     /**
      * Registration data service.
      */
     .factory('AboutDataService', AboutDataService)

     .factory('AboutClientDataService', AboutClientDataService)

     .factory('AboutPersistenceDataService', AboutPersistenceDataService);

     AboutDataService.$inject = ['AboutClientDataService'];

     function AboutDataService(AboutClientDataService) {
         var aboutDataService = {

         };

        return aboutDataService;
     }

     AboutClientDataService.$inject = ['$q', 'config'];

     function AboutClientDataService($q, config) {
         var aboutClientDataService = {
         };
         return aboutClientDataService;
     }

     AboutPersistenceDataService.$inject = [];

     function AboutPersistenceDataService() {
         var aboutPersistenceDataService = {};
         return aboutPersistenceDataService;
     }
 })();