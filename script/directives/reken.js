/*global app, console*/
app.directive('rekenSpel', ['$timeout', function ($timeout) {
    "use strict";
    return {
        restrict: "E",
        templateUrl: 'script/directives/reken.html',
        link: function (scope, element, attrs) {
            
            var timeout = null,
                check = '<i class="fa fa-check green pop"></i>',
                x,
                y,
                z,
                
                end = function () {
                    scope.playing = true;
                    scope.equasion = "Helaas, probeer het nog eens. Je had er " + scope.score.length + " goed";
                },
                
                win = function () {
                    if (scope.score.length === 10) {
                        scope.playing = true;
                        scope.time = 0;
                        scope.equasion = "Geweldig! Je hebt er " + scope.score.length + " goed!";
                        $timeout.cancel(timeout);
                    }
                },
            
                startCountdown = function (time, pause) {
                    scope.time = time;
                    if (!time) {
                        end();
                    } else {
                        $timeout.cancel(timeout);
                        timeout = $timeout(function () {
                            scope.time -= 1;
                            startCountdown(scope.time, 1000);
                        }, pause);
                    }
                },
                
                math = function () {
                    x = Math.round(Math.random() * 100);
                    y = Math.round(Math.random() * 100);
                    z = x + y;
                    scope.equasion = x + " + " + y;
                    console.log(x, y, x + y);
                },
                
                addTime = function () {
                    scope.time += 5;
                    startCountdown(scope.time, 1000);
                };
            
            scope.score = [
                
            ];
            
            scope.play = function () {
                scope.score = [];
                math();
                scope.started = true;
                scope.playing = false;
                startCountdown(10, 1000);
            };
            
            scope.check = function () {
                if (scope.solve === z) {
                    math();
                    addTime();
                    scope.score.push({check: "true"});
                    scope.solve = "";
                    win();
                } else {
                    return;
                }
            };
            
        }
    };
}]);