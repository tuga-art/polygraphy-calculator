(function() {
  'use strict'

  angular
    .module('calcApp')
    .controller('stickersController', stickersController)
    .component('stickersElem', {
      templateUrl: 'wp-content/plugins/rg-polygraphy-calculator/assets/components/stickers/stickers.tmpl.html',
      controller: stickersController
    });

    stickersController.$inject = ['$scope', 'dataService', 'calcService'];

    function stickersController($scope, dataService, calcService) {
      var sc = $scope;

      sc.prodAttr = dataService.production.stickers;
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
        var covering = sel.covering.cost;
        var varData = sel.printVariableData.cost;
        var crooked = sel.crooked.cost;
        var sheetsA3 = calcService.calcLayout(sel, sc.primeCost);
        var amount = sheetsA3 * sel.amount.gain;

        var result = (printing+material+covering+crooked+varData)*amount;

        return (result * sc.primeCost.usdBelRubl).toFixed(2);
      }

    }

})();
