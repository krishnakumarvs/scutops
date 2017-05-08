(function() {

    var prefix = "http://192.168.1.4:4567/";
    var API_URL = {
        serverUrl: prefix,
        login: prefix + "login",
        getAnnouncement: prefix + "getAnnouncement",
        getMessages: prefix + "getMessages",
        getNotifications: prefix + "getNotifications",
        sendFeedback: prefix + "sendFeedback",
        editUserDetails: prefix + "editUserDetails",
        fileUpload: prefix + "upload",
        applyJob: prefix + "applyJob",
        registration: prefix + "registration",
        getAllCompanies: prefix + "getAllCompanies",
        forgotPassword: prefix + "forgotPassword",
        deleteNotification: prefix + "deleteNotification",
        deleteMessage: prefix + "deleteMessage",
        getRecentInterviewDates: prefix + "getRecentInterviewDates"
    };

    function recalculateUrls(prefix) {
        console.log(API_URL);
        console.log(prefix);
        API_URL = {
            serverUrl: prefix,
            login: prefix + "login",
            getAnnouncement: prefix + "getAnnouncement",
            getMessages: prefix + "getMessages",
            getNotifications: prefix + "getNotifications",
            sendFeedback: prefix + "sendFeedback",
            editUserDetails: prefix + "editUserDetails",
            fileUpload: prefix + "upload",
            applyJob: prefix + "applyJob",
            registration: prefix + "registration",
            getAllCompanies: prefix + "getAllCompanies",
            forgotPassword: prefix + "forgotPassword",
            deleteNotification: prefix + "deleteNotification"
        }
        console.log(API_URL);
        config.API_URL = API_URL;
    }

    var userDetails = {};

    var config = {
        API_URL: API_URL,
        userDetails: userDetails,
        prefix: prefix,
        recalculateUrls: recalculateUrls
    };

    angular.module(appName).value('config', config);
})()