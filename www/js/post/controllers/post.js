
(function () {
  function postController(postFactory,$cordovaCamera) {

    var vm = this;
    vm.createPost = createPost;
    vm.escolher=escolher;

    function createPost(dados) {
      postFactory.create(dados);
      console.log('post');

    }

    function escolher() {
      var options = {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 300,
        targetHeight: 300,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function (imageData) {
        vm.imgURI = "data:image/jpeg;base64," + imageData;
        console.log(vm.imgURI);
      }, function (err) {
        // An error occured. Show a message to the user
      });
    }
  }

    postController.$inject = ['postFactory','$cordovaCamera'];
    angular.module('app.post').controller('postController', postController);

} ());