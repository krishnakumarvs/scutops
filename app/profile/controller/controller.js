 (function() {
     'use strict';

     /**
      * Get the main module (shared for Workout).
      */
     angular.module(appName)
         /**
          * Login Controller.
          */
         .controller('ProfileController', Profile);


     Profile.$inject = ['$state', '$filter', 'config'];

     function Profile($state, $filter, config) {
         var profileVm = this;
         // Variable declarations
         profileVm.currentUser = {};

         // Function declarations
         profileVm.updateProfile = updateProfile;

         activate();

         function activate() {
             if (!config.userDetails.name) {
                 $state.go('login');
             } else {
                console.log("Inside activate");

                 profileVm.userDetails = config.userDetails;
                 console.log(profileVm.userDetails);
                 if (config.userDetails.photo) {
                     profileVm.userImage = config.API_URL.serverUrl + config.userDetails.photo;
                 } else {
                     profileVm.userImage = "img/person.png";
                 }
                 console.log("profileVm.userImage" + profileVm.userImage);
             }
         }


         function updateProfile() {
             console.log("Clicked on update profile");
             $state.go('editProfile');
         }
     }

 })();