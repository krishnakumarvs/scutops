(function() {
    'use strict';

    /**
     * Get the main module (shared for Workout).
     */
    angular.module(appName)
        /**
         * Set location Controller.
         */
        .controller('SetLocationController', SetLocation);

    SetLocation.$inject = ['$state', '$filter', '$http', 'config', '$location', '$scope', '$compile','$window'];

    function SetLocation($state, $filter, $http, config, $location, $scope, $compile, $window ) {
        var loginVm = this;
        // Variable declarations
        loginVm.currentUser = {};
        loginVm.currentUser.email = ""; //manu@gmail.com
        loginVm.currentUser.password = ""; //mannu

        // Function declarations
        loginVm.authinticateUser = authinticateUser;
        loginVm.SignUp = SignUp;
        loginVm.goToPaymentPage = goToPaymentPage;

        activate();

        function initialize() {
            console.log("initialize map");
            var myLatlng = new google.maps.LatLng(9.9971, 76.3028);

            var mapOptions = {
                center: myLatlng,
                zoom: 18
            };
            var map = new google.maps.Map(document.getElementById("map"),
                mapOptions);

            //Marker + infowindow + angularjs compiled ng-click
            var contentString = "<div><a ng-click='clickTest()'>Click me!</a></div>";
            var compiled = $compile(contentString)($scope);

            var infowindow = new google.maps.InfoWindow({
                content: compiled[0]
            });

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: 'Some location'
            });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
            });

            $scope.map = map;

            var input = document.getElementById('pac-input');
            var searchBox = new google.maps.places.SearchBox(input);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

            // Bias the SearchBox results towards current map's viewport.
            map.addListener('bounds_changed', function() {
                searchBox.setBounds(map.getBounds());
            });

            var markers = [];
            searchBox.addListener('places_changed', function() {
                var places = searchBox.getPlaces();
                if (places.length == 0) {
                    return;
                }
                // Clear out the old markers.
                markers.forEach(function(marker) {
                    marker.setMap(null);
                });
                markers = [];

                // For each place, get the icon, name and location.
                var bounds = new google.maps.LatLngBounds();
                places.forEach(function(place) {
                    if (!place.geometry) {
                        console.log("Returned place contains no geometry");
                        return;
                    }
                    var icon = {
                        url: place.icon,
                        size: new google.maps.Size(71, 71),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(17, 34),
                        scaledSize: new google.maps.Size(25, 25)
                    };

                    // Create a marker for each place.
                    markers.push(new google.maps.Marker({
                        map: map,
                        icon: icon,
                        title: place.name,
                        position: place.geometry.location
                    }));

                    if (place.geometry.viewport) {
                        // Only geocodes have viewport.
                        bounds.union(place.geometry.viewport);
                    } else {
                        bounds.extend(place.geometry.location);
                    }
                });
                map.fitBounds(bounds);
            });
            /*setTimeout(function(){ 
                console.log("Hello"); 
                $window.location.reload();
        }, 1000);*/
            
        }

        function doMapInitializations() {
            google.maps.event.addDomListener(window, 'load', initialize);

            $scope.centerOnMe = function() {
                if (!$scope.map) {
                    return;
                }


                navigator.geolocation.getCurrentPosition(function(pos) {
                    $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                    $scope.loading.hide();
                }, function(error) {
                    alert('Unable to get location: ' + error.message);
                });
            };
        }


        function activate() {
            loginVm.selectedDate = new Date();
            doMapInitializations();
                /*setTimeout(function(){ 
                    console.log("Loading......"); 
                    
            }, 1000);*/
            // To initialize anything before the project starts
        }

        function authinticateUser() {
            $state.go('dashboard');
        }

        function SignUp() {
            $state.go('registration'); //change state go to app.module
        }


        function goToPaymentPage() {
            /*$location.path('/forgot');*/
            alert("payment gateway under maintanance");
        }
    }

})();