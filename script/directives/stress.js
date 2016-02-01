/*global app, console*/

app.directive('stressButton', ['data', '$interval', function (data, $interval) {
    "use strict";
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'script/directives/stress.html',
        link: function (scope, element, attrs) {
            
            scope.value = 0.0;
            scope.message = "Houd mij ingedrukt";
            
            var addition,
                increment = function (start, pause) {
                    addition = $interval(function () {
                        if (scope.value < 25) {
                            scope.value += 0.1;
                            scope.count = start;
                            start += 0.1;
                            scope.message = "Laat los wanneer je klaar bent";
                            scope.move = {'bottom': scope.count + '%'};
                        } else if (scope.value >= 25 && scope.value < 50) {
                            scope.value += 0.1;
                            scope.count = start;
                            start += 0.1;
                            scope.message = "Lage Stress";
                            scope.move = {'bottom': scope.count + '%'};
                        } else if (scope.value >= 50 && scope.value < 75) {
                            scope.value += 0.1;
                            scope.count = start;
                            start += 0.1;
                            scope.message = "Middelmatige Stress";
                            scope.move = {'bottom': scope.count + '%'};
                        } else if (scope.value >= 75 && scope.value < 100) {
                            scope.value += 0.1;
                            scope.count = start;
                            start += 0.1;
                            scope.message = "Hoge Stress";
                            scope.move = {'bottom': scope.count + '%'};
                        } else if (scope.value >= 100) {
                            scope.message = "Maximale Stress";
                            scope.move = {'bottom': scope.count + '%'};
                        }
                    }, pause);
                },
                
                stop = function () {
                    $interval.cancel(addition);
                    data.results.stressData.push(Math.floor(scope.value));
                    data.results.stressLabels.push("Opname" + data.results.stressData.length);
                    scope.message = "Houd mij ingedrukt";
                    scope.count = -100;
                    scope.value = 0;
                    scope.move = {'bottom': scope.count + '%'};
                };

            element.bind("touchstart", function () {
                increment(-100, 10);
            });

            element.bind("touchend", function () {
                stop();
            });
            
//            element.bind("mousedown", function () {
//                increment(-100, 10);
//            });
//
//            element.bind("mouseup", function () {
//                stop();
//            });
//            
        }
    };
    
}]);