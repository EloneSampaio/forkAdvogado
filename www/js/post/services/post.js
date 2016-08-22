
(function () {
    'use strict';


    postFactory.$inject = ['$firebaseArray'];
    angular.module('app.post').factory('postFactory', postFactory);


    function postFactory($firebaseArray) {

        var rootrEF = firebase.database().ref().child('post');
        var storageRef = firebase.storage().ref();
        var object = $firebaseArray(rootrEF);
        var service = {
            create: create,
            lista: lista

        };

        return service;



        function create(dados) {
            var post = {
                autor_id: "djfjdfjjf",
                conteudo: dados.conteudo,
                create_time: firebase.database.ServerValue.TIMESTAMP,
                foto: dados.foto,
                update_time: firebase.database.ServerValue.TIMESTAMP,
                titulo: dados.titulo
            };
            return object.$add(post);

        }

        function lista() {

            var query = rootrEF.orderByChild("update_time").limitToLast(50);
            return $firebaseArray(query);


        }

        function saveImage(file,metadata) {

            storageRef.child('postagens/' + file).put(file, metadata);
        }
    


}

} ());