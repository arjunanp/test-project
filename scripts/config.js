angularApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
           .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller:'homeController'
        }).state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            
        }).state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html',
            
        }).state('tours', {
            url: '/tours',
            templateUrl: 'views/tours.html',
            controller:'toursController'
        });
        
});
