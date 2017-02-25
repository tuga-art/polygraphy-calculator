(function () {

  angular
    .module('calcApp')
    .controller('bookletsController', bookletsController)
    .component('bookletsElem', {
      templateUrl: 'wp-content/plugins/rg-polygraphy-calculator/assets/components/booklets/booklets.tmpl.html',
      controller: 'bookletsController',
    });


    bookletsController.$inject = ['$scope', '$timeout', 'dataService', 'calcService'];

    function bookletsController($scope, $timeout, dataService, calcService) {
      var sc = $scope;

      sc.prodAttr = dataService.production.booklets;
      sc.primeCost = dataService.primeCost;

      sc.selected = {};

      angular.forEach(sc.prodAttr, function(options, key) {
        sc.selected[key] = options[0];
      });

      sc.selected.quantity = 100;


      sc.$watch('selected.quantity', function(newVal, oldVal) {
        $timeout(function() {
          if (sc.selected.quantity < 100 || sc.selected.quantity === '') {
             sc.selected.quantity = 100;
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
        var printing = sc.primeCost.print1060*sel.colored.cost;
        var sheetsA3 = calcService.calcLayout(sel, sc.primeCost);
        var varData = sel.printVariableData.cost;

        var amount = sheetsA3 * sel.amount.gain;
        var result = (printing+sel.material.cost+sel.folding.cost+varData)*amount;

        result = isNaN(result) ? 0 : result;

        return (result * sc.primeCost.usdBelRubl).toFixed(2);
      }

    }

})();
