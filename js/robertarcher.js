angular.module('robertArcher', ['ui.router','portfolio'])
  .controller('robertArcherController', function() {
    pc = this;
  })
  .config(function ($locationProvider) {
    $locationProvider.html5Mode(true);
  })
;

angular.bootstrap(document, ['robertArcher']);
