(function () {

  angular
    .module('calcApp')
    .controller('envelopesController', envelopesController)
    .component('envelopesElem', {
      templateUrl: 'wp-content/plugins/rg-polygraphy-calculator/assets/components/envelopes/envelopes.tmpl.html',
      controller: 'envelopesController',
    });


    envelopesController.$inject = ['$scope', '$timeout', 'dataService', 'calcService'];

    function envelopesController($scope, $timeout, dataService, calcService) {
      var sc = $scope;

      sc.prodAttr = dataService.production.envelopes;
      sc.primeCost = dataService.primeCost;

      sc.selected = {};

      angular.forEach(sc.prodAttr, function(options, key) {
        sc.selected[key] = options[0];
      });
      sc.selected.quantity = 20;

      sc.$watch('selected.quantity', function(newVal, oldVal) {
        $timeout(function() {
          if (sc.selected.quantity < 20 || sc.selected.quantity === '') {
             sc.selected.quantity = 20;
           }
         }, 1300);

         var amounts = sc.prodAttr.amount;
         for (var i = 0; i < amounts.length; i++) {
           if (amounts[i].tag >= newVal) {
             var y = i ? i-1 : i;
             sc.selected.amount = amounts[y];
             return;
           }
         }
     });

      sc.$watch('selected', function(newVal, oldVal) {
        sc.totalprice = calculateFinalPrice(newVal);
      }, true);

      function calculateFinalPrice(sel) {
        var printing = sc.primeCost.print7800*sel.colored.cost;
        var sheetsA3 = calcService.calcLayout(sel, sc.primeCost);
        var varData = sel.printVariableData.cost;

        var result = (printing*sheetsA3+sel.format.cost+varData)*sel.amount.gain;

        result = isNaN(result) ? 0 : result;

        return (result * sc.primeCost.usdBelRubl).toFixed(2);
      }

    }

})();
