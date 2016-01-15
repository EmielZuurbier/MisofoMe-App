/*global app*/
app.directive('back', ['$window', function ($window) {
    "use strict";
    return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.on('click', function () {
                $window.history.back();
            });
        }
    };
}]);

