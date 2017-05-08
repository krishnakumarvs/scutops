 (function() {
     'use strict';

     /**
      * Get Shared module.
      */
     angular.module(appName)

     /**
      * Registration data service.
      */
     .factory('AnnouncementDataService', AnnouncementDataService)

     .factory('AnnouncementClientDataService', AnnouncementClientDataService)

     .factory('AnnouncementPersistenceDataService', AnnouncementPersistenceDataService);

     AnnouncementDataService.$inject = ['AnnouncementClientDataService'];

     function AnnouncementDataService(AnnouncementClientDataService) {
         var announcementDataService = {

         };

        return announcementDataService;
     }

     AnnouncementClientDataService.$inject = ['$q', 'config'];

     function AnnouncementClientDataService($q, config) {
         var announcementClientDataService = {
         };
         return announcementClientDataService;
     }

     AnnouncementPersistenceDataService.$inject = [];

     function AnnouncementPersistenceDataService() {
         var announcementPersistenceDataService = {};
         return announcementPersistenceDataService;
     }
 })();