(function(){
  'use strict';

  function routa($stateProvider, $urlRouterProvider) {

    $stateProvider
   
     .state('login', {
        url: '/login',
        views: {
          'menuContent': {
            templateUrl: 'js/login/views/index.html',
            controller: 'loginController',
            controllerAs: 'vm'
          }
        }
      });



  }


  routa.$inject = ['$stateProvider', '$urlRouterProvider'];
angular.module('app.login').config(routa);

})();