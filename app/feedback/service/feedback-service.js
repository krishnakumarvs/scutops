 (function() {
     'use strict';

     /**
      * Get Shared module.
      */
     angular.module(appName)

     /**
      * Registration data service.
      */
     .factory('FeedbackDataService', FeedbackDataService)

     .factory('FeedbackClientDataService', FeedbackClientDataService)

     .factory('FeedbackPersistenceDataService', FeedbackPersistenceDataService);

     FeedbackDataService.$inject = ['FeedbackClientDataService'];

     function FeedbackDataService(FeedbackClientDataService) {
         var feedbackDataService = {

         };

        return feedbackDataService;
     }

     FeedbackClientDataService.$inject = ['$q', 'config'];

     function FeedbackClientDataService($q, config) {
         var feedbackClientDataService = {
         };
         return feedbackClientDataService;
     }

     FeedbackPersistenceDataService.$inject = [];

     function FeedbackPersistenceDataService() {
         var feedbackPersistenceDataService = {};
         return feedbackPersistenceDataService;
     }
 })();