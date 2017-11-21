var myApp = angular.module("myApp",['ui.router','ngMessages']);
myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/login");

    $stateProvider
        .state("login", {
            url: "/login",
            templateUrl: "html/login.html"
        })
        .state("backstage", {
            url:"/backstage",
            templateUrl: "html/backstage.html"
        })
        .state("backstage.articlelist", {
            url:"/articlelist",
            templateUrl: "html/articlelist.html"
        })
        .state("backstage.addarticle", {
            url:"/addarticle",
            templateUrl: "html/addarticle.html"
        });
});