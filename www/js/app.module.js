// Ionic  App


/*
   FUNCAO RESPONSAVEL POR INICIAR AS DEFINICOES DA APP
 */

(function () {
  'use strict';



  var app = angular.module('app', ['ionic', 'firebase', 
  'ngCordova','app.home','app.login','app.usuario']);


  /*  
    FUNCAO RESPONSAVEL POR CARREGAR ALGUMAS DEFINICOES DO MUDLO CORDOVA  
  */
  app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });


  });



  function routa($stateProvider, $urlRouterProvider) {

    $stateProvider.state('sair', {
      url: '/sair',
      controller: 'SairController'
    });


    $urlRouterProvider.otherwise('home');

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
