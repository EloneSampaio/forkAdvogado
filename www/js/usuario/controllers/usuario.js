
(function () {
  function usuarioController(usuarioFactory) {

    var vm = this;
    vm.criarAdvogado=createAdvogado;

    function createAdvogado() {

      usuarioFactory.createAdvogado();
    }


  }

  usuarioController.$inject = ['usuarioFactory'];
  angular.module('app.usuario').controller('usuarioController', usuarioController);

} ());