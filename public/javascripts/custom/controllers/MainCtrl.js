angular.module('Settings', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache',
        'ngRoute', 'ngResource', 'naif.base64'])

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
                    controller: 'SettingController'
                })
        }])

    .factory('Settings', [ '$resource', function($resource){
        return $resource('/settings/:id', null, {
            'update' : {method: 'PUT'}
        })
    }])

    .controller('SettingController', [ '$scope', 'Settings', function($scope, Settings){
            $scope.editing = [];
            $scope.settings = Settings.query();
            $scope.adding = false;
            $scope.newSetting = {};

            $scope.edit = function(index){
                console.log(index);
                $scope.editing[index] = angular.copy($scope.settings[index]);
            };

            $scope.cancel = function(index){
                $scope.settings[index] = angular.copy($scope.settings[index]);
                $scope.editing[index] = false;
            };

            $scope.update = function(index){
                console.log(index);
                var setting = $scope.settings[index];
                console.log(setting.picture);
                Settings.update({id: setting._id}, setting);
                $scope.editing[index] = false;
            };

            $scope.add = function(){
                if(!$scope.newSetting.name || !$scope.newSetting.story) return;

                var setting = new Settings({
                    name: $scope.newSetting.name,
                    picture: $scope.newSetting.picture,
                    story: $scope.newSetting.story
                });

                setting.$save(function(){
                    $scope.settings.push(setting);
                    $scope.newSetting = {};
                });
                $scope.adding = false;
            };

            $scope.startAdding = function(){
                $scope.adding = true;
                console.log("start adding");
            };

            $scope.cancelAdding = function(){
                $scope.adding = false;
            }

        }]);

/*
    .directive("fileread", [function () {
        return {
            scope: {
                fileread: "="
            },
            link: function (scope, element, attributes) {
                element.bind("change", function (changeEvent) {
                    var reader = new FileReader();
                    reader.onload = function (loadEvent) {
                        scope.$apply(function () {
                            scope.fileread = loadEvent.target.result;
                        });
                    }
                    reader.readAsDataURL(changeEvent.target.files[0]);
                });
            }
        }
    }]);*/
