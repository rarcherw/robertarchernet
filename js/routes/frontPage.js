function frontPageController(){
    fpc = this;
}

angular.module('frontPage',
  [
    'ngMaterial',
  ]
)
.config(function ($stateProvider, $locationProvider) {
    $stateProvider.state('frontPage', {
        name: 'frontPage',
        url: '/',
        template: '<front-page></front-page>'
    });
})
.component('frontPage', {
  templateUrl: 'templates/frontPage.tmpl',
  controller: frontPageController,
})
;
