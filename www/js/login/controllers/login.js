
(function () {

  loginController.$inject = ['usuarioFactory', '$window',
    '$cordovaSpinnerDialog', '$ionicPlatform'];
  angular.module('app').controller('loginController', loginController);

  function loginController(usuarioService, $window, $cordovaSpinnerDialog, $ionicPlatform) {

    var vm = this;

    vm.login = login;
    vm.authenticacao = authenticate;
   
    function login(d) {
      $ionicPlatform.ready(function () {

        usuarioService.login(d)
          .then(function (dados) {
            console.log(dados.displayName);

            $window.location.href = '#/app/home';
          }).catch(function (error) {
            if (error.code == "auth/wrong-password") {
              vm.regError = true;
              vm.message = error.message;

              $cordovaSpinnerDialog.show("title", vm.message, true);
              $cordovaSpinnerDialog.hide();

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
      });


    }


    function authenticate(auth) {

      usuarioService.authenticate(auth)
        .then(function (d) {
          var user = firebase.auth().currentUser;
          

          vm.perfil = user;
          console.log(vm.perfil);
          $window.location.href = '#/app/home';
        }).catch(function (error) {
          if (error.code === 'auth/account-exists-with-different-credential') {
            alert('voce ja logou com esse provedor');
            console.log(error.message);


          } else {
            console.error(error);
          }
        });


    }

   


  }

} ());