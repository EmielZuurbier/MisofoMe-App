/*global app, console, alert*/

app.directive('addToCollection', ['data', '$mdToast', '$routeParams', function (data, $mdToast, $routeParams) {
    "use strict";
	return {
		restrict: 'E',
		scope: {
            card: '=info'
        },
		templateUrl: 'script/directives/add.html',
        link: function ($scope, element, attrs) {
            
            var toastShow = function (content) {
                $mdToast.show({
                    template: '<md-toast><span flex>' + content + '</span></md-toast>',
                    hideDelay: 1800,
                    position: "top right"
                });
            };
                        
            $scope.toggleCard = function (id) {
                if ($scope.card.active) {
                    $scope.buttonText = "Toevoegen";
                    $scope.card.active = false;
                    toastShow("Verwijderd uit Collectie");
                    console.log($scope.card.active);
                } else if (!$scope.card.active) {
                    $scope.buttonText = "Verwijderen";
                    $scope.card.active = true;
                    toastShow("Toegevoegd aan Collectie");
                    console.log($scope.card.active);
                }
            };
            
            if ($scope.card.active) {
                $scope.buttonText = "Verwijderen";
            } else if (!$scope.card.active) {
                $scope.buttonText = "Toevoegen";
            }
        }
    };
}]);