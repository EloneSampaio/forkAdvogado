(function () {

  var app = angular.module('app');


  function routa($stateProvider, $urlRouterProvider) {

    $stateProvider.state('sair', {
      url: '/sair',
      controller: 'SairController'
    });


    $urlRouterProvider.otherwise('/app/home');

  }

  function SairController($window,usuarioFactory) {

    //firebase.auth().signOut().then(function () {
  usuarioFactory.sair().then(function(){
      $window.location.href = '#/login';
    }).catch(function (error) {
      console.log('ocorreu um erro' + error);
    });
  }

  routa.$inject = ['$stateProvider', '$urlRouterProvider'];
  SairController.$inject = ['$window','usuarioFactory'];


  app.config(routa);
  app.controller('SairController', SairController);


} ());


