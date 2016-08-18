
(function () {
  function postController(postFactory) {

    var vm = this;
    vm.createPost = createPost;

    function createPost(dados) {
      postFactory.create(dados);
      console.log('post');

    }


  }

  postController.$inject = ['postFactory'];
  angular.module('app.post').controller('postController', postController);

} ());