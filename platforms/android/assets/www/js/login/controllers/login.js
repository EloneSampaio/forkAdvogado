
(function () {

  loginController.$inject = ['usuarioFactory', '$window',
    '$cordovaSpinnerDialog', '$ionicPlatform'];
  angular.module('app').controller('loginController', loginController);

  function loginController(usuarioService, $window, $cordovaSpinnerDialog, $ionicPlatform) {

    var vm = this;

    vm.login = login;
    //vm.showData=showData;

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
    /*
    $ionicPlatform.ready(function(){
   vm.showDatePicker = function(){
      var options = {
         date: new Date(),
         mode: 'date', // or 'time'
         minDate: new Date() - 10000,
         allowOldDates: true,
         allowFutureDates: false,
         doneButtonLabel: 'DONE',
         doneButtonColor: '#F2F3F4',
         cancelButtonLabel: 'CANCEL',
         cancelButtonColor: '#000000'
      };

      $cordovaDatePicker.show(options).then(function(date){
         alert(date);
      });
  };
});
*/

  }

} ());