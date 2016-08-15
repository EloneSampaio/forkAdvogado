(function () {
    angular.module('app').config(config);

    config.$inject = ['$window'];
    function config($window) {


        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(user);
                $window.location.href = '#/app/home';

            } else {
                $window.location.href = '#/app/home';
                console.log('error n logado');
            }
        });

    }
})();
