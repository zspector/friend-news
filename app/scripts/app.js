/* global app:true */
'use strict';

/**
 * @ngdoc overview
 * @name friendNewsApp
 * @description
 * # friendNewsApp
 *
 * Main module of the application.
 */


var app = angular.module('friendNewsApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'firebase'])
  .constant('FIREBASE_URL', 'https://friend-news.firebaseIO.com/');

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
