/*global app, console*/
app.directive('toolTip', ['data', '$timeout', function (data, $timeout) {
    "use strict";
    return {
        restrict: "E",
        scope: {
            message: "=message",
            position: "=position",
            index: "=index",
            active: "=active"
        },
        template: '<div data-ng-click="tooltipHide()" data-ng-if="positioning(position)" data-ng-hide="tooltipActive" class="tooltip"><i class=" fa fa-times"></i>{{ message }}</div>',
        link: function (scope, element, attrs) {
                        
            scope.tooltipActive = true;
            var showTooltip = function (message) {
                scope.message = message;
                $timeout(function () {
                    scope.tooltipActive = false;
                }, 1000);
            };
            
            scope.positioning = function (position) {
                if (scope.active) {
                    if (position === "") {
                        return true;
                    } else if (position === scope.index) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            };
            
            scope.tooltipHide = function () {
                scope.tooltipActive = true;
            };
            showTooltip(scope.message);
            
        }
    };
}]);