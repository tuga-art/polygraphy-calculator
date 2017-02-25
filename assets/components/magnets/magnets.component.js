(function () {

  angular
    .module('calcApp')
    .controller('magnetsController', magnetsController)
    .component('magnetsElem', {
      templateUrl: 'wp-content/plugins/rg-polygraphy-calculator/assets/components/magnets/magnets.tmpl.html',
      controller: 'magnetsController',
    });


    magnetsController.$inject = ['$scope', 'dataService', 'calcService'];

    function magnetsController($scope, dataService, calcService) {
      var sc = $scope;

      sc.prodAttr = dataService.production.magnets;
      sc.primeCost = dataService.primeCost;

      sc.selected = {};

      angular.forEach(sc.prodAttr, function(options, key) {
        sc.selected[key] = options[0];
      });

      sc.$watch('selected', function(newVal, oldVal) {
        sc.totalprice = calculateFinalPrice(newVal);
      }, true);

      function calculateFinalPrice(sel) {
        var printing = sc.primeCost.print1060;
        var material = sc.primeCost.selfAdhesive[0].cost;
        var basis = sel.basis.cost;
        var covering = sel.covering.cost;
        var corners = sel.roundCorners.cost;
        var crooked = sel.crooked.cost;
        var varData = sel.printVariableData.cost;
        var sheetsA3 = calcService.calcLayout(sel, sc.primeCost);
        var amount = sheetsA3 * sel.amount.gain;
        var notePadcalc = (sel.sheetSize.cost+sel.sheetPrint.cost)*sel.sheetQtt.cost;

        var notePad = sel.notePad.selected ? notePadcalc : 0;

        var result = (material+printing+basis+covering+corners+crooked+varData+notePad)*amount;

        return (result * sc.primeCost.usdBelRubl).toFixed(2);
      }



    }


  })();
