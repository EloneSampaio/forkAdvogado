
(function () {
  function homeController($firebaseArray) {

    var vm = this;
    var firebase = new Firebase('https://appfork-64c7d.firebaseio.com/');
    var usuario = $firebaseArray(firebase.child('usuarios'));
    vm.add = function (d) {
     
     

    }

  vm.titulo = 'sam';


  }
  


  homeController.$inject = ['$firebaseArray'];
  angular.module('app').controller('homeController', homeController);

} ());