
(function () {
  'use strict';

  loginController.$inject = ['usuarioFactory', '$window', '$location', '$state', '$firebaseObject', 'ionicToast', '$cordovaOauth', '$ionicPopup'];
  angular.module('app.login').controller('loginController', loginController);

  function loginController(usuarioService, $window, $location, $state, $firebaseObject, ionicToast, $cordovaOauth, $ionicPopup) {

    var vm = this;

    vm.login = login;
    vm.authenticacao = authenticate;

    function login(d) {

      usuarioService.login(d)
        .then(function (dados) {
          console.log('egg');
          ionicToast.show('seja bem vindo', 'top', false, 2500);
          $state.go('app.home');

        });



    }


    function authenticate(auth) {



      usuarioService.authenticate(auth).then(function (data) {
         $ionicPopup.alert({
            title: 'Mensagem',
            content: 'conectado'
          });
        $state.go('app.home');

      });



    }

    vm.facebook = function () {
      $cordovaOauth.google("123402466738-muuupsjavga7b4pclb89d4d3nbdfr8kq.apps.googleusercontent.com", ["email"]).then(function (result) {
        $scope.authObj.$authWithOAuthToken("google", result.access_token).then(function (authData) {
          $ionicPopup.alert({
            title: 'Mensagem',
            content: 'conectado'
          });

          $state.go('app.home');
        }).catch(function (error) {
          $ionicPopup.alert({
            title: 'Mensagem',
            content: 'erro ao conectar' + error
          });

        });

      }, function (error) {
        console.log("ERROR: " + error);
      });
    }

    /*
        firebase.auth().onAuthStateChanged(function (user) {
    
          if (user) {
            console.log('logado');
            $state.go('app.home');
    
          } else {
            console.log('nao logado');
          }
        });
    
    
    */

  }

} ());