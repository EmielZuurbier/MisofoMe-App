/*global app, console*/

app.directive('edit', ['data', function (data) {
    "use strict";
    return {
        restrict: 'E',
        scope: {
            card: "=info",
            user: "=user"
        },
        template: '<a data-ng-href="#/bibliotheek/{{ card.id }}/edit" data-ng-if="card.author === user.name"><i class="fa fa-pencil"></i></a>'
    };
}]);

app.directive('remove', ['data', '$mdToast', '$location', function (data, $mdToast, $location) {
    "use strict";
    return {
        restrict: 'E',
        scope: {
            card: "=info",
            user: "=user"
        },
        template: '<a data-ng-click="remove(card.id)" data-ng-if="card.author === user.name"><i class="fa fa-trash"></i></a>',
        link: function (scope, element, attrs) {
            
            var toastShow = function (content) {
                $mdToast.show({
                    template: '<md-toast><span flex>' + content + '</span></md-toast>',
                    hideDelay: 1800,
                    position: "top right"
                });
            };
            
            scope.remove = function (index) {
                data.cards.splice(index, 1);
                for (index; index < data.cards.length; index += 1) {
                    data.cards[index].id -= 1;
                }
                $location.path('/bibliotheek');
                toastShow("Oefening verwijderd");
                scope.card.deleted = true;
            };
            
        }
    };
}]);