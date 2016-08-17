(function () {
  'use strict';

  function routa($stateProvider, $urlRouterProvider) {

    $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'js/login/views/index.html',
        controller: 'loginController',
        controllerAs: 'vm',
        onEnter:  autenticar
  

      }
      );



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



  routa.$inject = ['$stateProvider', '$urlRouterProvider'];
  angular.module('app.login').config(routa);

})();