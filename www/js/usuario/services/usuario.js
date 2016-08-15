
(function () {
    'use strict';


    usuarioService.$inject = ['$firebaseAuth'];
    angular.module('app').factory('usuarioFactory', usuarioService);


    function usuarioService($firebaseAuth, $window) {

        var auth = $firebaseAuth();
        var service = {
            create: create,
            login: login,
            authenticate: authenticate,
            sair: sair
        };

        return service;



        function create(usuario) {
            return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha);
        }

        function login(usuario) {
            return firebase.auth().signInWithEmailAndPassword(usuario.email, usuario.senha);
        }

        function update(usuario) {
            var usuario = firebase.auth().currentUser;
            return user.updateProfile({ displayName: usuario.nome, photoURL: usuario.foto });
        }

        function authenticate(auth) {
            switch (auth) {
                case 'facebook':
                    var provider = new firebase.auth.FacebookAuthProvider();

                    break;

                default:
                    break;
            }
            return firebase.auth().signInWithPopup(provider)
        }

        function sair() {
        return  firebase.auth().signOut();
           
        }


    }

} ());