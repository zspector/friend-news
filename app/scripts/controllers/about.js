'use strict';

/**
 * @ngdoc function
 * @name friendNewsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the friendNewsApp
 */
angular.module('friendNewsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
