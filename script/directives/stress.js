/*global app, console*/

app.directive('stressButton', ['data', '$interval', function (data, $interval) {
    "use strict";
    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'script/directives/stress.html',
        link: function (scope, element, attrs) {
            
            scope.value = 0;
            scope.count = -100;
            scope.move = {'bottom': scope.count + '%'};
            scope.message = "Houd mij ingedrukt";
            
            var addition,
                pause = 100,
                pressed = false,
                
                increment = function (start, paused) {
                    addition = $interval(function () {
                        if (scope.value < 25) {
                            scope.value += 0.5;
                            scope.count += 0.5;
                            scope.message = "Laat los wanneer je klaar bent";

                            paused += 1;
                            pause = paused;

                            scope.move = {'bottom': scope.count + '%'};
                        } else if (scope.value >= 25 && scope.value < 50) {
                            scope.value += 0.5;
                            scope.count += 0.5;
                            scope.message = "Lage Stress";

                            paused += 1;
                            pause = paused;

                            scope.move = {'bottom': scope.count + '%'};
                        } else if (scope.value >= 50 && scope.value < 75) {
                            scope.value += 0.5;
                            scope.count += 0.5;
                            scope.message = "Middelmatige Stress";

                            paused += 1;
                            pause = paused;

                            scope.move = {'bottom': scope.count + '%'};
                        } else if (scope.value >= 75 && scope.value < 100) {
                            scope.value += 0.5;
                            scope.count += 0.5;
                            scope.message = "Hoge Stress";

                            paused += 1;
                            pause = paused;

                            scope.move = {'bottom': scope.count + '%'};
                        } else if (scope.value === 100) {
                            scope.message = "Maximale Stress";
                            scope.move = {'bottom': scope.count + '%'};
                        }
                    }, pause);
                },
                
                stop = function () {
                    $interval.cancel(addition);
                
                    data.results.stressData.push(scope.value);
                    data.results.stressLabels.push("Opname" + data.results.stressData.length);

                    scope.message = "Houd mij ingedrukt";
                    scope.count = -100;
                    scope.value = 0;
                    pause = 50;
                    scope.move = {'bottom': scope.count + '%'};
                };

            element.bind("touchstart", function () {
                pressed = true;
                increment(-100, pause);
            });

            element.bind("touchend", function () {
                pressed = false;
                stop();
            });
            
        }
    };
    
}]);