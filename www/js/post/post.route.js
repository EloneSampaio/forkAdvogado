(function(){

  function routa($stateProvider, $urlRouterProvider) {

    $stateProvider
   
     .state('app.post', {
        url: '/post',
        views: {
          'menuContent': {
            templateUrl: 'js/post/views/index.html',
            controller: 'postController',
            controllerAs: 'vm'
          }
        }
      });



  }


  routa.$inject = ['$stateProvider', '$urlRouterProvider'];
angular.module('app.post').config(routa);

})();