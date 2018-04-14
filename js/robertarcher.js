angular.module('robertArcher', [
  'ui.router',
  'ngMaterial',
  'portfolioPage',
  'frontPage'
 ])
.controller('robertArcherController', function() {
  pc = this;
})
.config(function ($locationProvider) {
  $locationProvider.html5Mode(true);
})
;

angular.bootstrap(document, ['robertArcher']);
