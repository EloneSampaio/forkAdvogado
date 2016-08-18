
(function () {
  'use strict';

  loginController.$inject = ['usuarioFactory', '$window', '$location', '$state', '$firebaseObject', 'ionicToast'];
  angular.module('app.login').controller('loginController', loginController);

  function loginController(usuarioService, $window, $location, $state, $firebaseObject, ionicToast) {

    var vm = this;

    vm.login = login;
    vm.authenticacao = authenticate;
   
    function login(d) {

      usuarioService.login(d)
        .then(function (dados) {
            console.log('egg');
          ionicToast.show('seja bem vindo', 'top', true, 2500);
            $state.go('app.home');
    
        });



    }


    function authenticate(auth) {



      usuarioService.authenticate(auth);



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