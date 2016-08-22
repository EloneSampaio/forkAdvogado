vm.openPhotoLibrary = function () {
    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
    };

    $cordovaCamera.getPicture(options).then(function (imageData) {

        console.log(imageData);
        console.log(options);   
        var image = document.getElementById('tempImage');
        image.src = imageData;

        filePath = imageData;

    }, function (err) {
        // error
        console.log(err);
    });
}