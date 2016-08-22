// Ionic  App


/*
   FUNCAO RESPONSAVEL POR INICIAR AS DEFINICOES DA APP
 */

(function () {
  'use strict';



  var app = angular.module('app', ['ionic', 'firebase',
    'ngCordova', 'app.home', 'app.login', 'app.usuario','app.post','ionic-toast','ngCordovaOauth']);


  /*  
    FUNCAO RESPONSAVEL POR CARREGAR ALGUMAS DEFINICOES DO MUDLO CORDOVA  
  */
  app.run(function ($ionicPlatform,$ionicPopup) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }

      if(window.Connection){
        if(navigator.connection.type==Connection.NONE){
      $ionicPopup.alert({
         title: 'Mensagem',
         content: 'Verifica a sua conexao de internet'
      });
        }
      }
    });



  });
  app.directive('goClick', function ($location) {
    return function (scope, element, attrs) {
      var path;

      attrs.$observe('goClick', function (val) {
        path = val;
      });

      element.bind('click', function () {
        scope.$apply(function () {
          $location.path(path);
        });
      });
    };
  });



  function routa($stateProvider, $urlRouterProvider) {

    $stateProvider.state('sair', {
      url: '/sair',
      controller: 'SairController'
    });
    $stateProvider.state('conta', {
       url: '/conta',
     templateUrl: 'js/usuario/views/conta.html',
            controller: 'usuarioController',
            controllerAs: 'vm',
    });




    $urlRouterProvider.otherwise('/app/home');

  }

  function SairController($location, usuarioFactory) {

    //firebase.auth().signOut().then(function () {
    usuarioFactory.sair();

    $location.path('/login');
    window.localStorage.removeItem("firebase:session::localhost");



  }


  



  routa.$inject = ['$stateProvider', '$urlRouterProvider'];
  SairController.$inject = ['$location', 'usuarioFactory'];


  app.config(routa);
  app.controller('SairController', SairController);


} ());
