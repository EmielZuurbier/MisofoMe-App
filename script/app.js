/*global angular, $rootScope*/

var app = angular.module('misofonieApp', ['ngRoute', 'ngAnimate', 'ngTouch', 'chart.js', 'ngMaterial', 'ngDragDrop']);

app.config(function ($routeProvider) {
    "use strict";
    $routeProvider
        .when('/collectie', {
            templateUrl: 'views/pages/page-home.html',
            title: 'MisofoMe',
            sorter: true,
            back: false
        })
        .when('/screening', {
            templateUrl: 'views/pages/page-screening.html',
            title: 'Screening',
            sorter: true,
            back: false
        })
        .when('/test', {
            templateUrl: 'views/pages/page-test.html',
            title: 'Amisos',
            sorter: true,
            back: true
        })
        .when('/stress', {
            templateUrl: 'views/pages/page-stress.html',
            title: 'Stress-test',
            sorter: true,
            back: true
        })
        .when('/dashboard', {
            templateUrl: 'views/pages/page-dashboard.html',
            title: 'Resultaten',
            sorter: true,
            back: false
        })
        .when('/bibliotheek', {
            templateUrl: 'views/pages/page-bibliotheek.html',
            'title': 'Oefeningen',
            sorter: false,
            back: false
        })
        .when('/bibliotheek/:id', {
            templateUrl: 'views/pages/page-excercise.html',
            controller: 'mainController',
            title: 'Oefening',
            sorter: true,
            back: true
        })
        .when('/bibliotheek/:id/edit', {
            templateUrl: 'views/pages/page-edit.html',
            controller: 'mainController',
            title: 'Aanpassen',
            sorter: true,
            back: true
        })
        .when('/info', {
            templateUrl: 'views/pages/page-info.html',
            title: 'info',
            sorter: true,
            back: false
        })
        .when('/info/:id', {
            templateUrl: 'views/pages/page-info-detail.html',
            controller: 'mainController',
            title: 'info',
            sorter: true,
            back: true
        })
        .when('/maak', {
            templateUrl: 'views/pages/page-maak.html',
            controller: 'mainController',
            title: 'Maak Oefening',
            sorter: true,
            back: true
        })
        .when('/instellingen', {
            templateUrl: 'views/pages/page-settings.html',
            title: 'Instellingen',
            sorter: true,
            back: false
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
            $rootScope.back = current.$$route.back;
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





