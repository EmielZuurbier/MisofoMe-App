/*global angular, $rootScope*/

var app = angular.module('misofonieApp', ['ngRoute', 'ngAnimate', 'ngTouch', 'chart.js', 'ngMaterial', 'ngDragDrop']);

app.config(function ($routeProvider) {
    "use strict";
    $routeProvider
        .when('/collectie', {
            templateUrl: 'views/pages/page-home.html',
            title: 'MisofoMe',
            sorter: true
        })
        .when('/screening', {
            templateUrl: 'views/pages/page-screening.html',
            title: 'Screening',
            sorter: true
        })
        .when('/test', {
            templateUrl: 'views/pages/page-test.html',
            title: 'Amisos',
            sorter: true
        })
        .when('/stress', {
            templateUrl: 'views/pages/page-stress.html',
            title: 'Stress-test',
            sorter: true
        })
        .when('/dashboard', {
            templateUrl: 'views/pages/page-dashboard.html',
            title: 'Resultaten',
            sorter: true
        })
        .when('/bibliotheek', {
            templateUrl: 'views/pages/page-bibliotheek.html',
            'title': 'Oefeningen',
            sorter: false
        })
        .when('/bibliotheek/:id', {
            templateUrl: 'views/pages/page-excercise.html',
            controller: 'mainController',
            title: 'Oefening',
            sorter: true
        })
        .when('/maak', {
            templateUrl: 'views/pages/page-maak.html',
            controller: 'mainController',
            title: 'Maak Oefening',
            sorter: true
        })
        .when('/instellingen', {
            templateUrl: 'views/pages/page-settings.html',
            title: 'Instellingen',
            sorter: true
        })
        .otherwise({
            redirectTo: '/collectie'
        });
});

app.run(['$location', '$rootScope', function ($location, $rootScope) {
    "use strict";
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

        if (current.hasOwnProperty('$$route')) {

            $rootScope.pageName = current.$$route.title;
            $rootScope.sorter = current.$$route.sorter;
        }
    });
}]);

app.filter('reverse', function () {
    "use strict";
    return function (items) {
        return items.slice().reverse();
    };
});


app.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    "use strict";
    $scope.close = function () {
        $mdSidenav('right').close()
            .then(function () {
                $log.debug("close RIGHT is done");
            });
    };
});





