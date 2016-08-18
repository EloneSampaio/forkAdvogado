
(function () {
  'use strict';

  homeController.$inject = ['usuarioFactory', '$rootScope', '$firebaseObject'];
  angular.module('app.home').controller('homeController', homeController);



  function homeController(usuarioService, $rootScope, $firebaseObject) {
    var vm = this;
    vm.add = adicionar;
    vm.perfil = $rootScope.UsuarioLogado;
    var rootrEF = firebase.database().ref().child('constituicao');
    var object = $firebaseObject(rootrEF);
    console.log(object);
    vm.dados = object;


    function adicionar(d) {

      usuarioService.create(d);
      console.log('add');
    }





  }



} ());