// Ionic  App


/*
   FUNCAO RESPONSAVEL POR INICIAR AS DEFINICOES DA APP
 */

(function () {

  app = angular.module('app', ['ionic', 'firebase', 'ngCordova']);


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

 


} ());
