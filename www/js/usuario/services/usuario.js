
(function () {
    'use strict';


    usuarioService.$inject = ['$firebaseAuth'];
    angular.module('app.usuario').factory('usuarioFactory', usuarioService);


    function usuarioService($firebaseAuth) {

        var Auth = $firebaseAuth(firebase.auth());
        var service = {
            create: create,
            login: login,
            authenticate: authenticate,
            sair: sair,
            verificaStatus: verificaStatus

        };

        return service;



        function create(usuario) {
            return Auth.$createUserWithEmailAndPassword(usuario.email, usuario.senha);
        }

        function login(usuario) {
            return Auth.$signInWithEmailAndPassword(usuario.email, usuario.senha);
        }

        function update(usuario) {
            var usuario = firebase.auth().currentUser;
            return user.updateProfile({ displayName: usuario.nome, photoURL: usuario.foto });
        }

        function verificaStatus() {
            firebase.auth().onAuthStateChanged(function (user) {

                if (user) {
                    return true;

                } else {
                    return false;
                }
            });
        }

        function authenticate(auth) {
            switch (auth) {
                case 'facebook':
                    //var provider = new firebase.auth.FacebookAuthProvider();
                    var provider = Auth.$signInWithPopup(auth);


                    break;

                default:
                    break;
            }
            return provider;
            // return firebase.auth().signInWithPopup(provider)
        }

        function sair() {
            return Auth.$signOut();

        }




    }

} ());