(function() {
    'use strict';

    /**
     * Get Shared module.
     */
    angular.module(appName)

    /**
     * Add task data service.
     */
    .factory('TaskDataService', TaskDataService)

    .factory('TaskClientDataService', TaskClientDataService)

    .factory('TaskPersistenceDataService', TaskPersistenceDataService);

    TaskDataService.$inject = ['TaskClientDataService', 'TaskPersistenceDataService'];

    function TaskDataService(TaskClientDataService, TaskPersistenceDataService) {
        var taskDataService = {
            storeTaskDetails: storeTaskDetails
        };
        return taskDataService;

        function storeTaskDetails(taskDetails){
            return TaskClientDataService.storeTaskDetails(taskDetails);
        }
    }

    TaskClientDataService.$inject = ['$q', 'config'];

    function TaskClientDataService($q, config) {
        var taskClientDataService = {
            storeTaskDetails:storeTaskDetails
        };
        return taskClientDataService;

         function storeTaskDetails(taskDetails){
            var defer = $q.defer();
             defer.resolve(true);
             return defer.promise;
        }
    }

    TaskPersistenceDataService.$inject = ['$q', 'config'];

    function TaskPersistenceDataService($q, config) {
        var newTaskPersistenceDataService = {
        };
        return newTaskPersistenceDataService;
    }
})();