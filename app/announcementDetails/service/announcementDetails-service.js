 (function() {
     'use strict';

     /**
      * Get Shared module.
      */
     angular.module(appName)

     /**
      * Registration data service.
      */
     .factory('AnnouncementDetailsDataService', AnnouncementDetailsDataService)

     .factory('AnnouncementDetailsClientDataService', AnnouncementDetailsClientDataService)

     .factory('AnnouncementDetailsPersistenceDataService', AnnouncementDetailsPersistenceDataService);

     AnnouncementDetailsDataService.$inject = ['AnnouncementDetailsClientDataService'];

     function AnnouncementDetailsDataService(AnnouncementDetailsClientDataService) {
         var announcementDetailsDataService = {

         };

        return announcementDetailsDataService;
     }

     AnnouncementDetailsClientDataService.$inject = ['$q', 'config'];

     function AnnouncementDetailsClientDataService($q, config) {
         var announcementDetailsClientDataService = {
         };
         return announcementDetailsClientDataService;
     }

     AnnouncementDetailsPersistenceDataService.$inject = [];

     function AnnouncementDetailsPersistenceDataService() {
         var announcementDetailsPersistenceDataService = {};
         return announcementDetailsPersistenceDataService;
     }
 })();