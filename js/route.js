(function () {
    'use strict';
    angular.module('WizPhoto')
        .config(RoutesConfig);
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
            url: '/home',
            templateUrl: 'partials/homepage.html',
            controller: 'homePageController'
        })
            .state('search', {
            url: '/search/:searchText',
            templateUrl: 'partials/searchBoxPage.html',
            controller: 'searchController'
        })
            .state('gridarchives', {
            url: '/gridarchives',
            templateUrl: 'partials/grid_archives.html',
            controller: 'gridArchController'
        })
            .state('portfolio', {
            url: '/portfolio',
            templateUrl: 'partials/portfolio_grid.html',
            controller: 'portfolioController'
        })
            .state('contacts', {
            url: '/contacts',
            templateUrl: 'partials/contactsPage.html'
        })
            .state('showcase', {
            url: '/showcase',
            templateUrl: 'partials/showcasePage.html',
            controller: 'showCaseControler'
        })
            .state('aboutUs', {
            url: '/aboutUs',
            templateUrl: 'partials/aboutUsPage.html'
        })
            .state('error', {
            url: '/error',
            templateUrl: 'partials/errorPage.html'
        });
    }
}());