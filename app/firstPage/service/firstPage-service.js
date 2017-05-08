 (function() {
     'use strict';

     /**
      * Get Shared module.
      */
     angular.module(appName)

     /**
      * Registration data service.
      */
     .factory('FirstPageDataService', FirstPageDataService)

     .factory('FirstPageClientDataService', FirstPageClientDataService)

     .factory('FirstPagePersistenceDataService', FirstPagePersistenceDataService);

     FirstPageDataService.$inject = ['FirstPageClientDataService'];

     function FirstPageDataService(FirstPageClientDataService) {
         var firstPageDataService = {

         };

        return firstPageDataService;
     }

     FirstPageClientDataService.$inject = ['$q', 'config'];

     function FirstPageClientDataService($q, config) {
         var firstPageClientDataService = {
         };
         return firstPageClientDataService;
     }

     FirstPagePersistenceDataService.$inject = [];

     function FirstPagePersistenceDataService() {
         var firstPagePersistenceDataService = {};
         return firstPagePersistenceDataService;
     }
 })();