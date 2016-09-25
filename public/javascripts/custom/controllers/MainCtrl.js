angular.module('MyApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache',
        'ngRoute'])
    .config(['$mdThemingProvider', '$mdIconProvider', '$routeProvider',
        function($mdThemingProvider, $mdIconProvider, $routeProvider){
            $mdThemingProvider.theme('default')
                .primaryPalette('teal')
                .accentPalette('blue-grey');
            $mdIconProvider
                .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
                .defaultIconSet('img/icons/sets/core-icons.svg', 24);
            $routeProvider
                .when('/', {
                    templateUrl: '/javascripts/custom/templates/Settings.html',
                    controller: 'AppCtrl'
                })
        }])
    .controller('AppCtrl', function($scope) {
        
    });