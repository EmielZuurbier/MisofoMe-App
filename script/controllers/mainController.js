/*global angular, app, data, d3, console, confirm, $*/

app.controller('mainController', ['$scope', 'data', '$routeParams', '$location', '$mdToast', '$mdDialog', '$sce',  function ($scope, data, $routeParams, $location, $mdToast, $mdDialog, $sce) {
    "use strict";
    
    var toastShow = function (content) {
        $mdToast.show({
            template: '<md-toast><span flex>' + content + '</span></md-toast>',
            hideDelay: 1800,
            position: "top right"
        });
    };
    
    // HREF FUNCTION
    $scope.go = function (path) {
        $location.path(path);
    };
    
    // GET ACTIVE MENU ITEM
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) === path) {
            return 'active';
        } else {
            return '';
        }
    };
    
    // CONNECT SCOPES
    $scope.cards = data.cards;
    $scope.results = data.results;
    $scope.cardsParam = data.cards[$routeParams.id];
    $scope.settings = data.settings;
    $scope.settingsPref = data.settingsPref;
    $scope.settingsOutput = $scope.settingsPref.toString();
    $scope.user = data.user;
    $scope.info = data.info;
    $scope.infoParam = data.info[$routeParams.id];
    
    $scope.trustAsHtml = function (trust) {
        return $sce.trustAsHtml(trust);
    };
    
    // VOORKEUREN FILTER VOOR OEFENINGEN
    $scope.cardTag = function (card) {
        return card.tags === $scope.settingsPref[0] ||
            card.tags === $scope.settingsPref[1] ||
            card.tags === $scope.settingsPref[2] ||
            card.tags === $scope.settingsPref[3] ||
            card.tags === $scope.settingsPref[4] ||
            card.tags === $scope.settingsPref[5] ||
            card.tags === $scope.settingsPref[6];
    };
    
    // NEW EXERCISE
    $scope.oefeningAdd = function (title, category, tags, content) {
        var d = new Date();
        
        data.cards.push({
            name: title,
            active: false,
            type: "exercise",
            author: data.user.name,
            likes: 0,
            dislikes: 0,
            liked: false,
            disliked: false,
            id: data.cards.length,
            category: [category],
            tags: tags,
            icon: "fa fa-user",
            title: title,
            thumb: "media/thumb/" + category + ".png",
            desc: content,
            content: content,
            date: d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear(),
            show: false
        });
        console.log(data.cards[data.cards.length - 1]);
        console.log(data.cards);
        toastShow('Oefening aangemaakt');
        $location.path('/bibliotheek');
    };
    
    // OEFENING AANPASSEN
    $scope.oefeningEdit = function (title, category, tags, content, id) {
        data.cards[id].title = title;
        data.cards[id].category = [category];
        data.cards[id].tags = tags;
        data.cards[id].desc = content;
        data.cards[id].content = content;
        
        console.log(data.cards[data.cards.length - 1]);
        toastShow('Oefening aangepast');
        $location.path('/bibliotheek');
    };
    
    // UPDATE AMISOS DATA
    $scope.newAmiData = [];
    $scope.updateNewAmiData = function (dataN) {
        $scope.newAmiData = $.map(dataN, function (value, index) {
            return [parseInt(value, 10)];
        });
        data.results.amiData[1] = data.results.amiData[0];
        data.results.amiData[0] = $scope.newAmiData;
        $scope.newamiTotal = $scope.newAmiData.reduce(function (a, b) {
            return a + b;
        });
        data.results.amiTotal[0].push($scope.newamiTotal);
        data.results.amiTotal[0].shift();
        var d = new Date();
        data.results.amiDates.push(d.getDate() + "/" + (d.getMonth() + 1));
        data.results.amiDates.shift();
        
        $scope.calculateResult();

        $location.path('/dashboard');
    };
    
    // BEREKEN UITSLAG VAN AMISOS
    $scope.calculateResult = function () {
        if (data.results.amiTotal[0][4] <= 10) {
            $scope.amiResultsHeader = "<strong>0 - 10 punten: </strong><br>Geen misofonie.";
            $scope.amiResultsBody = "U vertoont geen tot enige kenmerken van misofonie. De kenmerken zijn niet zo zwaar dat het raadzaam is om hulp te zoeken.";
            $scope.amiResultsClass = "";
        } else if (data.results.amiTotal[0][4] <= 20 && data.results.amiTotal[0][4] < 30) {
            $scope.amiResultsHeader = "<strong class='blue'>11 - 20 punten: </strong><br>Milde symptomen misofonie.";
            $scope.amiResultsBody = "U vertoont lichte symptomen van misofonie. Als misofonie zich eenmaal heeft ontwikkeld is het chronisch, hoewel u er in bepaalde perioden meer last van kunt hebben dan in andere (bijvoorbeeld onder invloed van stress). Wel zouden de symptomen in de loop van de tijd kunnen verergeren; zo kan uw afkeer zich uitbreiden naar andere geluiden. Als u merkt dat dit het geval is, kan het raadzaam zijn om hulp te zoeken. ";
            $scope.amiResultsClass = "blue";
        } else if (data.results.amiTotal[0][4] <= 30 && data.results.amiTotal[0][4] < 40) {
            $scope.amiResultsHeader = "<strong class='orange'>21 - 30 punten: </strong><br>Middelmatige symptomen van misofonie.";
            $scope.amiResultsBody = "U vertoont middelmatige symptomen van misofonie. Als misofonie zich eenmaal heeft ontwikkeld is het chronisch, hoewel u er in bepaalde perioden meer last van kunt hebben dan in andere (bijvoorbeeld onder invloed van stress). Wel zouden de symptomen in de loop van de tijd kunnen verergeren; zo kan uw afkeer zich uitbreiden naar andere geluiden. Als de symptomen van misofonie u belemmeren in uw functioneren (bijvoorbeeld in uw werk en/of thuis), is het raadzaam om hulp te zoeken.";
            $scope.amiResultsClass = "orange";
        } else if (data.results.amiTotal[0][4] <= 40 && data.results.amiTotal[0][4] < 50) {
            $scope.amiResultsHeader = "<strong class='red'>31 - 40 punten: </strong><br>Ernstige symptomen van misofonie.";
            $scope.amiResultsBody = "U vertoont ernstige symptomen van misofonie. Waarschijnlijk belemmeren deze symptomen u in uw functioneren (bijvoorbeeld in uw werk en/of thuis). Dan is het raadzaam om hulp te zoeken.";
            $scope.amiResultsClass = "red";
        } else if (data.results.amiTotal[0][4] <= 50) {
            $scope.amiResultsHeader = "<strong class='purple'>41 - 50 punten: </strong><br>Zeer ernstige symtomen van misofonie.";
            $scope.amiResultsBody = "U vertoont zeer ernstige symptomen van misofonie. Zeer waarschijnlijk belemmeren deze symptomen u in uw functioneren (bijvoorbeeld in uw werk en/of thuis). Dan is het raadzaam om hulp te zoeken.";
            $scope.amiResultsClass = "purple";
        } else {
            $scope.amiResultsHeader = "<strong>Geen test afgenomen<br> Neem de test af bij SCREENING</strong>";
        }
    };
    $scope.calculateResult();
    
    // SORTEER FILTER OEFENINGEN
    $scope.sorteer = '-id';
    $scope.sort = function (order) {
        $scope.sorteer = order;
    };
        
}]);

app.controller('PositionDemoCtrl', function DemoCtrl($mdDialog) {
    "use strict";
    var originatorEv;
    this.openMenu = function ($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };
});
