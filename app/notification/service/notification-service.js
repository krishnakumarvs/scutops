 (function() {
     'use strict';

     /**
      * Get Shared module.
      */
     angular.module(appName)

     /**
      * Registration data service.
      */
     .factory('NotificationDataService', NotificationDataService)

     .factory('NotificationClientDataService', NotificationClientDataService)

     .factory('NotificationPersistenceDataService', NotificationPersistenceDataService);

     NotificationDataService.$inject = ['NotificationClientDataService'];

     function NotificationDataService(NotificationClientDataService) {
         var notificationDataService = {

         };

        return notificationDataService;
     }

     NotificationClientDataService.$inject = ['$q', 'config'];

     function NotificationClientDataService($q, config) {
         var notificationClientDataService = {
         };
         return notificationClientDataService;
     }

     NotificationPersistenceDataService.$inject = [];

     function NotificationPersistenceDataService() {
         var notificationPersistenceDataService = {};
         return notificationPersistenceDataService;
     }
 })();