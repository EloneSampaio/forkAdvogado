(function(){
  'use strict';

  function routa($stateProvider, $urlRouterProvider) {
    $stateProvider
   
     .state('home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'js/home/views/index.html',
            controller: 'homeController',
            controllerAs: 'vm'
          }
        }
      });




    $urlRouterProvider.otherwise('home');

  }


  routa.$inject = ['$stateProvider', '$urlRouterProvider'];
angular.module('app.home').config(routa);

})();