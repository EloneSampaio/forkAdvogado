
(function () {
    
  homeController.$inject = ['usuarioFactory'];
  angular.module('app').controller('homeController', homeController);



  function homeController(usuarioService) {
    var vm = this;
    vm. add=adicionar;

    function adicionar(d) {

      usuarioService.create(d);
      console.log('add');
    }
    vm.titulo = 'sam';


  }



} ());