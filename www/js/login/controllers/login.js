
(function () {
  'use strict';

  loginController.$inject = ['usuarioFactory', '$window', '$location', '$state', '$firebaseAuth'];
  angular.module('app.login').controller('loginController', loginController);

  function loginController(usuarioService, $window, $location, $state, $firebaseAuth) {

    var vm = this;

    vm.login = login;
    vm.authenticacao = authenticate;
    var Auth = $firebaseAuth(firebase.auth());

    function login(d) {

      usuarioService.login(d)
        .then(function (dados) {

          $window.location.href = '#/app/home';
        }).catch(function (error) {
          if (error.code == "auth/wrong-password") {
            vm.regError = true;
            vm.message = error.message;


            console.log(error.message);


          }
          if (error.code == "auth/invalid-email") {
            vm.regError = true;
            vm.message = error.message;

            console.log(error.message);
          }
          if (error.code == "auth/user-disabled") {
            vm.regError = true;
            vm.message = error.message;

            console.log(error.message);
          }

          if (error.code == "auth/user-not-found") {
            vm.regError = true;
            vm.message = error.message;

            console.log(error.message);
          }
          if (error.code == "auth/wrong-password") {
            vm.regError = true;
            vm.message = error.message;

            console.log(error.message);
          }




        });



    }


    function authenticate(auth) {
    


      usuarioService.authenticate(auth);
        


    }


    firebase.auth().onAuthStateChanged(function (user) {

      if (user) {
        console.log('logado');
        $state.go('app.home');

      } else {
        console.log('nao logado');
      }
    });




  }

} ());