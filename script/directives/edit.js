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