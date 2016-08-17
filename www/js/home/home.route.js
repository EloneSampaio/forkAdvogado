(function () {
  'use strict';

  function routa($stateProvider, $urlRouterProvider, $locationProvider) {


    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'homeController'
      })

      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'js/home/views/index.html',
            controller: 'homeController',
            controllerAs: 'vm',
            resolve: {

              auth: autenticar
            }

          }
        }
      });




    $urlRouterProvider.otherwise('/app/home');


  }

  autenticar.$inject = ['$state'];
  function autenticar($state) {
    firebase.auth().onAuthStateChanged(function (user) {

      if (user) {
        console.log('logado');

      } else {
        console.log('nao logado');
        $state.go('login');
      }
    });
  }



  routa.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  angular.module('app.home').config(routa);


})();