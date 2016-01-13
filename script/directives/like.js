/*global app, console, alert*/

app.directive('likeDislike', ['data', function (data) {
    "use strict";
	return {
		restrict: 'E',
		scope: {
            card: '=info'
        },
		templateUrl: 'script/directives/like.html',
        link: function (scope, element, attrs) {
            
            scope.like = function () {
                if (!scope.card.liked) {
                    scope.card.likes += 1;
                    scope.card.liked = true;
                } else if (scope.card.liked) {
                    scope.card.likes -= 1;
                    scope.card.liked = false;
                }
            };
            
            scope.dislike = function () {
                if (!scope.card.disliked) {
                    scope.card.dislikes += 1;
                    scope.card.disliked = true;
                } else if (scope.card.disliked) {
                    scope.card.dislikes -= 1;
                    scope.card.disliked = false;
                }
            };
        }
    };
}]);