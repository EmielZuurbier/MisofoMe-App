/*global app, console, alert*/

app.directive('move', ['data', function (data) {
    "use strict";
	return {
		restrict: 'E',
		templateUrl: 'script/directives/move.html',
        link: function (scope, element, attrs) {
            
            scope.moveUp = function (index) {
                console.log(scope.cards[index]);
//                var temp = scope.cards[index - 1];
//                scope.cards.splice(index, 0);
//                
//                
//                scope.$index -= 1;
//                console.log(scope.$index);
//                console.log(scope.cards);
                
                
            };
            scope.moveDown = function () {
                console.log(scope.$index);
                scope.$index = scope.$index + 1;
                console.log(scope.$index);
            };
            
            
//            var move = function (origin, destination) {
//                var temp = scope.card[destination];
//                console.log(temp);
//                scope.card[destination] = scope.card[origin];
//                scope.card[origin] = temp;
//            };
//
//            scope.moveUp = function (index) {
//                move(index, index - 1);
//                console.log(scope.card[index - 1]);
//                console.log(scope.card);
//            };
//
//            scope.moveDown = function (index) {
//                move(index, index + 1);
//                console.log(index + 1);
//            };
            
        }
    };
}]);