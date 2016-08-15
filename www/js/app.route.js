(function () {

  angular.module('app').config(routa);
  angular.module('app').controller('SairController',SairController);

  routa.$inject = ['$stateProvider', '$urlRouterProvider'];
  SairController.$inject=['$window'];

  function routa($stateProvider, $urlRouterProvider) {

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

    $stateProvider.state('sair', {
      url: '/sair',
      controller: 'SairController'
    });


    $urlRouterProvider.otherwise('/app/home');

  }

  function SairController($window) {

     firebase.auth().signOut().then(function () {

      $window.location.href = '#/login';
    }).catch(function (error) {
      console.log('ocorreu um erro'+error);
    });
  }


} ());


