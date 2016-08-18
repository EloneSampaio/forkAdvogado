
(function () {
    'use strict';


    postFactory.$inject = ['$firebaseArray'];
    angular.module('app.post').factory('postFactory', postFactory);


    function postFactory($firebaseArray) {

        var rootrEF = firebase.database().ref().child('post');
        var object = $firebaseArray(rootrEF);
        var service = {
            create: create

        };

        return service;



        function create(dados) {
            var post = {
                autor_id:  "djfjdfjjf",
                conteudo: dados.conteudo,
                create_time: firebase.database.ServerValue.TIMESTAMP,
                foto: dados.foto,
                update_time: firebase.database.ServerValue.TIMESTAMP
            };
            return object.$add(post);

        }


    }

} ());