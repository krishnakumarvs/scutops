 (function() {
     'use strict';

     /**
      * Get Shared module.
      */
     angular.module(appName)

     /**
      * Registration data service.
      */
     .factory('RegistrationDataService', RegistrationDataService)

     .factory('RegistrationClientDataService', RegistrationClientDataService)

     .factory('RegistrationPersistenceDataService', RegistrationPersistenceDataService);

     RegistrationDataService.$inject = ['RegistrationClientDataService'];

     function RegistrationDataService(RegistrationClientDataService) {
         var registrationDataService = {

         };

         return registrationDataService;
     }

     RegistrationClientDataService.$inject = ['$q', 'config'];

     function RegistrationClientDataService($q, config) {
         var registrationClientDataService = {
         };
         return registrationClientDataService;
     }
     
     RegistrationPersistenceDataService.$inject = [];

     function RegistrationPersistenceDataService() {
         var registrationPersistenceDataService = {};
         return registrationPersistenceDataService;
     }
 })();