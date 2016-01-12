/*global angular, app, data, d3, console, confirm, $*/

app.controller('mainController', ['$scope', 'data', '$routeParams', '$location', '$mdToast', '$mdDialog', '$sce',  function ($scope, data, $routeParams, $location, $mdToast, $mdDialog, $sce) {
    "use strict";
        
    $scope.go = function (path) {
        $location.path(path);
    };
    
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

    $scope.random = Math.floor(Math.random() * 10);
    
    console.log($scope.random);
    console.log($scope.settings);
    console.log($scope.settingsPref);
    
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

        $location.path('/dashboard');
    };
    
    // BEREKEN UITSLAG VAN AMISOS
    if (data.results.amiTotal[0][4] <= 4) {
        $scope.amiResultsHeader = "0 - 4 punten: Geen misofonie.";
        $scope.amiResultsBody = "U vertoont geen tot enige kenmerken van misofonie. De kenmerken zijn niet zo zwaar dat het raadzaam is om hulp te zoeken.";
    } else if (data.results.amiTotal[0][4] <= 9) {
        $scope.amiResultsBody = "5 - 9 punten: Milde symptomen van misofonie. U vertoont lichte symptomen van misofonie. Als misofonie zich eenmaal heeft ontwikkeld is het chronisch, hoewel u er in bepaalde perioden meer last van kunt hebben dan in andere (bijvoorbeeld onder invloed van stress). Wel zouden de symptomen in de loop van de tijd kunnen verergeren; zo kan uw afkeer zich uitbreiden naar andere geluiden. Als u merkt dat dit het geval is, kan het raadzaam zijn om hulp te zoeken. ";
    } else if (data.results.amiTotal[0][4] <= 14) {
        $scope.amiResultsHeader = "10 - 14 punten: Middelmatige symptomen van misofonie.";
        $scope.amiResultsBody = "U vertoont middelmatige symptomen van misofonie. Als misofonie zich eenmaal heeft ontwikkeld is het chronisch, hoewel u er in bepaalde perioden meer last van kunt hebben dan in andere (bijvoorbeeld onder invloed van stress). Wel zouden de symptomen in de loop van de tijd kunnen verergeren; zo kan uw afkeer zich uitbreiden naar andere geluiden. Als de symptomen van misofonie u belemmeren in uw functioneren (bijvoorbeeld in uw werk en/of thuis), is het raadzaam om hulp te zoeken.";
    } else if (data.results.amiTotal[0][4] <= 19) {
        $scope.amiResultsHeader = "15 - 19 punten: Ernstige symptomen van misofonie.";
        $scope.amiResultsBody = "U vertoont ernstige symptomen van misofonie. Waarschijnlijk belemmeren deze symptomen u in uw functioneren (bijvoorbeeld in uw werk en/of thuis). Dan is het raadzaam om hulp te zoeken.";
    } else if (data.results.amiTotal[0][4] <= 25) {
        $scope.amiResultsHeader = "20 - 25 punten: Zeer ernstige symtomen van misofonie.";
        $scope.amiResultsBody = "U vertoont zeer ernstige symptomen van misofonie. Zeer waarschijnlijk belemmeren deze symptomen u in uw functioneren (bijvoorbeeld in uw werk en/of thuis). Dan is het raadzaam om hulp te zoeken.";
    }
    
    $scope.saveSettings = function (setting) {
        data.settings = setting;
    };
    
    $scope.sort = function (order) {
        $scope.sorteer = order;
    };
    
    var toastShow = function (content) {
        $mdToast.show({
            template: '<md-toast><span flex>' + content + '</span></md-toast>',
            hideDelay: 1800,
            position: "top right"
        });
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