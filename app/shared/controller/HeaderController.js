(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
    /**
     * Header Controller.
     */
    .controller('HeaderController', Header);

    Header.$inject = ['$state'];

    function Header($state) {
        var headerVm = this;
        headerVm.goToPage = goToPage;

        function goToPage(pageNo) {
            console.log("clicked " + pageNo);

            switch (pageNo) {
                case 1:
                     $state.go('home');
                    // console.log("going to header profile")
                    break;
                 case 2:
                     $state.go('profile');
                    // console.log("going to header profile")
                    break;
                case 3:
                     $state.go('announcement');
                    break;

                case 4:
                     $state.go('notification');
                    break;
                case 5:
                     $state.go('feedback');
                    break;
                case 6:
                     $state.go('about');
                    break;
                case 7:
                     $state.go('help');
                    break;
                case 8:
                     $state.go('setting');
                    break;
                case 9:
                     $state.go('message');
                case 10:
                     $state.go('login');
                    break;    
                default:
                    //$state.go('tasks')
            }
        }
    }
})();