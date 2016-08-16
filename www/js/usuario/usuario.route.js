(function(){

  function routa($stateProvider, $urlRouterProvider) {

    $stateProvider
   
     .state('app.usuario', {
        url: '/usuario',
        views: {
          'menuContent': {
            templateUrl: 'js/usuario/views/index.html',
            controller: 'usuarioController',
            controllerAs: 'vm'
          }
        }
      });



  }


  routa.$inject = ['$stateProvider', '$urlRouterProvider'];
angular.module('app.usuario').config(routa);

})();