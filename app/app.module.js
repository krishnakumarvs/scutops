var appName = "Kakes";
// Ionic Starter App


angular.module(appName, ['ionic'])

.run(function($ionicPlatform, $rootScope, $state) {
    $rootScope.$state = $state;

    $ionicPlatform.ready(function() {

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });

    $rootScope.$on('$stateChangeStart', function(e, curr, prev) {

        $rootScope.pageTitle = curr.title;
    });

    $rootScope.$on('$stateChangeSuccess', function(e, curr, prev) {
        $rootScope.currentState = $state.current;

    });
})

.config(function($stateProvider, $urlRouterProvider) {
    //fallback language if entry is not found in current language
    /*$translateProvider.fallbackLanguage('es');*/
    //load language entries from files
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js


    $stateProvider

    // setup an abstract state for the tabs directive

        .state('header', {
        url: "/",
        templateUrl: "app/shared/templates/header.html",
        controller: 'HeaderController as Header',
        title: 'Header'
    })

    .state('login', {
        url: "/login",
        templateUrl: "app/login/templates/login.html",
        controller: 'LoginController as Login',
        title: 'Login'
    })

    .state('dashboard', {
        url: "/dashboard",
        templateUrl: "app/dashboard/templates/dashboard.html",
        controller: 'DashboardController as Dashboard',
        title: 'Dashboard'
    })

    .state('set-location', {
        url: "/set-location",
        templateUrl: "app/set-location/templates/set-location.html",
        controller: 'SetLocationController as SetLocation',
        title: 'SetLocation'
    })

    .state('editProfile', {
        url: "/editProfile",
        templateUrl: "app/editProfile/templates/editProfile.html",
        controller: 'EditProfileController as EditProfile',
        title: 'EDIT PROFILE'
    })

.state('changePassword', {
        url: "/changePassword",
        templateUrl: "app/changePassword/templates/changePassword.html",
        controller: 'ChangePasswordController as ChangePassword',
        title: 'CHANGE PASSWORD'
    })


.state('changeNotification', {
        url: "/changeNotification",
        templateUrl: "app/changeNotification/templates/changeNotification.html",
        controller: 'ChangeNotificationController as ChangeNotification',
        title: 'CHANGE NOTIFICATION'
    })

     .state('companyDetails', {
        url: "/companyDetails",
        templateUrl: "app/companyDetails/templates/companyDetails.html",
        controller: 'CompanyDetailsController as CompanyDetails',
        title: 'COMPANY'
    })

    .state('firstPage', {
        url: "/firstPage",
        templateUrl: "app/firstPage/templates/firstPage.html",
        controller: 'LoginController as Login',
        title: 'Login'
    })

    .state('announcementDetails', {
        url: "/announcementDetails",
        templateUrl: "app/announcementDetails/templates/announcementDetails.html",
        controller: 'AnnouncementDetailsController as AnnouncementDetails',
        title: 'ANNOUNCEMENT DETAILS'
    })

    .state('profile', {
            url: "/profile",
            title: 'PROFILE',
            templateUrl: "app/profile/templates/profile.html",
            controller: 'ProfileController as Profile'
        })
        .state('setting', {
            url: "/setting",
            title: 'SETTING',
            templateUrl: "app/setting/templates/setting.html",
            controller: 'SettingController as Setting'
        })

    .state('announcement', {
        url: "/announcement",
        title: 'ANNOUNCEMENT ',
        templateUrl: "app/announcement/templates/announcement.html",
        controller: 'AnnouncementController as Announcement'
    })

    .state('notification', {
        url: "/notification",
        title: 'NOTIFICATION ',
        templateUrl: "app/notification/templates/notification.html",
        controller: 'NotificationController as Notification'
    })



    .state('feedback', {
        url: "/feedback",
        title: 'FEEDBACK',
        templateUrl: "app/feedback/templates/feedback.html",
        controller: 'FeedbackController as Feedback'
    })

    .state('about', {
        url: "/about",
        title: 'ABOUT',
        templateUrl: "app/about/templates/about.html",
        controller: 'AboutController as About'
    })


    .state('help', {
        url: "/help",
        title: 'HELP',
        templateUrl: "app/help/templates/help.html",
        controller: 'HelpController as Help'
    })


    .state('message', {
        url: "/message",
        title: 'MESSAGE',
        templateUrl: "app/message/templates/message.html",
        controller: 'MessageController as Message'
    })

    .state('home', {
        url: "/home",
        title: 'HOME',
        showHeader: true,
        templateUrl: "app/homePage/templates/homePage.html",
        controller: 'HomePageController as Home'
    })

    // .state('header.registration', {
    //         url: "registration",
    //         title: 'REGISTRATION',
    //         views: {
    //             'menuContent': {
    //                 templateUrl: "app/registration/templates/registration.html",
    //                 controller: 'RegistrationController as Registration'
    //             }
    //         }
    //     })

    .state('registration', {
        url: "/registration",
        templateUrl: "app/registration/templates/registration.html",
        controller: 'RegistrationController as Registration',
        title: 'REGISTRATION'
    })

    .state('settings', {
        url: "settings",
        parent: 'header',
        showHeader: true,
        title: 'SETTINGS',
        templateUrl: "app/settings/templates/settings.html",
        controller: 'SettingsController as Settings'
    })

    .state('payment', {
        url: "/payment",
        title: 'payment',
        templateUrl: "app/payment/templates/payment.html",
        controller: 'SettingsController as Settings'
    });

    //mockResult

    /*.state('header.dashboard', {
        url: "dashboard",
        title: 'DashBoard',
        parent: 'header',
        showHeader: true,
        views: {
            'menuContent': {
                templateUrl: "app/templates/dashboard.html",
                controller: 'HomePageController as HomePage'
            }
        }
    })*/

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

});