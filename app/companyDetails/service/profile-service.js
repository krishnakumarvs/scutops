 (function() {
     'use strict';

     /**
      * Get Shared module.
      */
     angular.module(appName)

     /**
      * Registration data service.
      */
     .factory('ProfileDataService', ProfileDataService)

     .factory('ProfileClientDataService', ProfileClientDataService)

     .factory('ProfilePersistenceDataService', ProfilePersistenceDataService);

     ProfileDataService.$inject = ['ProfileClientDataService'];

     function ProfileDataService(ProfileClientDataService) {
         var profileDataService = {

         };

        return profileDataService;
     }

     ProfileClientDataService.$inject = ['$q', 'config'];

     function ProfileClientDataService($q, config) {
         var profileClientDataService = {
         };
         return profileClientDataService;
     }

     ProfilePersistenceDataService.$inject = [];

     function ProfilePersistenceDataService() {
         var profilePersistenceDataService = {};
         return profilePersistenceDataService;
     }
 })();