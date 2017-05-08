 (function() {
     'use strict';

     /**
      * Get the main module (shared for Workout).
      */
     angular.module(appName)
         /**
          * Login Controller.
          */
         .controller('AnnouncementDetailsController', AnnouncementDetails);


     AnnouncementDetails.$inject = ['$state', '$filter', 'config', '$http'];

     function AnnouncementDetails($state, $filter, config, $http) {
         var announcementDetailsVm = this;
         // Variable declarations
         announcementDetailsVm.currentUser = {};

         // Function declarations
         announcementDetailsVm.applyJob = applyJob;
         announcementDetailsVm.SignUp = SignUp;

         activate();

         function activate() {
             // To initialize anything before the project starts
             if (!config.userDetails.name) {
                 $state.go('login');
             } else {
                 if (config.announcement) {
                     console.log(config.announcement);
                     announcementDetailsVm.announcement = config.announcement;
                 } else {
                     $state.go('home');
                 }
             }
         }


         function applyJob() {
             $http({
                 method: "POST",
                 url: config.API_URL.applyJob,
                 data: {
                     userId: config.userDetails.userId,
                     announcementId: config.announcement.id
                 }
             }).then(function mySucces(response) {
                 console.log(response.data);
                 var api_result = response.data.result;
                 if (api_result) {
                     alert("Applied successfully");
                     $state.go('home');
                 } else {
                     alert(response.data.description);
                 }
             }, function myError(response) {
                 console.log(response.statusText);
             });
         }

         function SignUp() {
             $state.go('registration');
         }
     }

 })();