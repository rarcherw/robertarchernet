angular.module('portfolio', [])
.config(function ($stateProvider, $locationProvider) {
        $stateProvider.state('portfolio', {
            name: 'portfolio',
            url: '/portfolio',
            template: '<h1>Hello again from a new route!</h1>'
        });
    });
