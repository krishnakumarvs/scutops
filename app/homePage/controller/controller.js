(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Task Page Controller.
         */
        .controller('HomePageController', Home);

    Home.$inject = ['$state', '$http', 'config', '$timeout'];

    function Home($state, $http, config, $timeout) {
        var homePageVm = this;
        homePageVm.GotoViewTask = GotoViewTask;
        homePageVm.goToCompanyDetails = goToCompanyDetails;

        homePageVm.serverUrl = config.API_URL.serverUrl;

        activate();

        function activate() {
            if (!config.userDetails.name) {
                $state.go('login');
            } else {
                $http({
                    method: "POST",
                    url: config.API_URL.getAllCompanies,
                    data: {
                        userId: config.userDetails.userId
                    }
                }).then(function mySucces(response) {
                    var api_result = response.data.result;
                    if (api_result) {
                        homePageVm.allCompanies = response.data.payload;
                    } else {
                        alert(response.data.description);
                    }
                }, function myError(response) {
                    console.log(response.statusText);
                });
            }
            getRecentInterviews();
        }

        function getRecentInterviews() {
            $http({
                method: "POST",
                url: config.API_URL.getRecentInterviewDates,
                data: {
                    userId: config.userDetails.userId
                }
            }).then(function mySucces(response) {
                var api_result = response.data.result;
                if (api_result) {
                    console.log("Recent interview dates fetched success");
                    console.log(response.data.payload);
                    homePageVm.recentInterviews = response.data.payload;
                }
            }, function myError(response) {
                console.log(response.statusText);
            });
        }

        function GotoViewTask() {


        }

        function goToCompanyDetails(company) {
            console.log(company);
            config.clickedCompany = company;
            $timeout(goNow, 100);
        }

        function goNow() {
            $state.go('companyDetails');
        }
    }
})();