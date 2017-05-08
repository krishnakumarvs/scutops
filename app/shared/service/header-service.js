(function() {
    'use strict';

    /**
     * Get Shared module.
     */
    angular.module(appName)

    /**
     *  Header service.
     */
    .factory('HeaderDataService', HeaderDataService)

    .factory('HeaderClientDataService', HeaderClientDataService)

    .factory('HeaderPersistenceDataService', HeaderPersistenceDataService);

    HeaderDataService.$inject = ['HeaderClientDataService'];

    function HeaderDataService(HeaderClientDataService) {
        var headerDataService = {
            getUserUniqueKey: getUserUniqueKey
        };

        return headerDataService;

        function getUserUniqueKey() {
            return HeaderClientDataService.getUserUniqueKey();
        }
    }

    HeaderClientDataService.$inject = ['$q', 'config'];

    function HeaderClientDataService($q, config) {
        var headerClientDataService = {
            getUserUniqueKey: getUserUniqueKey
        };
        return headerClientDataService;

        function getUserUniqueKey() {
            var defer = $q.defer();
            defer.resolve(true);
            return defer.promise;
        }
    }

    HeaderPersistenceDataService.$inject = [];

    function HeaderPersistenceDataService() {
        var newHeaderPersistenceDataService = {};
        return HeaderPersistenceDataService;
    }
})();