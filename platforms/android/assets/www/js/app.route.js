(function(){

angular.module('app').config(routa);

routa.$inject=['$stateProvider','$urlRouterProvider'];

function routa($stateProvider, $urlRouterProvider){

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
         controllerAs: 'vm'
      }
    }
  })

      $stateProvider.state('login', {
         url: '/login',
         templateUrl: 'js/login/views/index.html',
         controller: 'loginController',
         controllerAs: 'vm'
    });


    $urlRouterProvider.otherwise('/app/home');

}

}());


