 (function() {
     'use strict';

     /**
      * Get Shared module.
      */
     angular.module(appName)

     /**
      * Registration data service.
      */
     .factory('EditProfileDataService', EditProfileDataService)

     .factory('EditProfileClientDataService', EditProfileClientDataService)

     .factory('EditProfilePersistenceDataService', EditProfilePersistenceDataService);

     EditProfileDataService.$inject = ['EditProfileClientDataService'];

     function EditProfileDataService(EditProfileClientDataService) {
         var editProfileDataService = {

         };

        return editProfileDataService;
     }

     EditProfileClientDataService.$inject = ['$q', 'config'];

     function EditProfileClientDataService($q, config) {
         var editProfileClientDataService = {
         };
         return editProfileClientDataService;
     }

     EditProfilePersistenceDataService.$inject = [];

     function EditProfilePersistenceDataService() {
         var editProfilePersistenceDataService = {};
         return editProfilePersistenceDataService;
     }
 })();