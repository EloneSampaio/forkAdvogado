
(function () {
  'use strict';

  homeController.$inject = ['usuarioFactory', '$rootScope', 'postFactory', '$scope'];
  angular.module('app.home').controller('homeController', homeController);



  function homeController(usuarioService, $rootScope, postFactory, $scope) {
    var vm = this;
    vm.add = adicionar;
    //vm.loadMore = loadMore;
    vm.perfil = $rootScope.UsuarioLogado;
    vm.dados = postFactory.lista();


    function adicionar(d) {

      usuarioService.create(d);
      console.log('add');
    }

    function loadMore() {
        vm.dados = vm.data;
      $scope.$broadcast('scroll.infiniteScrollComplete');

    }

    vm.canWeLoadMoreContent = function () {
      return (vm.dados.length > 15) ? false : true;
    }





  }



} ());