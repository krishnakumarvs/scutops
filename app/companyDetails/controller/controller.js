 (function() {
     'use strict';

     angular.module(appName)

     .controller('CompanyDetailsController', CompanyDetails);


     CompanyDetails.$inject = ['$state', '$filter', 'config'];

     function CompanyDetails($state, $filter, config) {
         var companyDetailsVm = this;
         // Variable declarations
         companyDetailsVm.currentUser = {};
         companyDetailsVm.Gotopage = Gotopage;

         companyDetailsVm.serverUrl = config.API_URL.serverUrl; 

         activate();

         function activate() {
             if (!config.clickedCompany) {
                 $state.go('login');
             } else {
                 companyDetailsVm.clickedCompany = config.clickedCompany;
             }
         }

         function Gotopage() {
             $state.go('home');
         }


     }

 })();