(function () {

  angular
    .module('calcApp')
    .controller('brochuresController', brochuresController)
    .component('brochuresElem', {
      templateUrl: 'wp-content/plugins/rg-polygraphy-calculator/assets/components/brochures/brochures.tmpl.html',
      controller: 'brochuresController',
    });


    brochuresController.$inject = ['$scope', '$timeout', 'dataService', 'calcService'];

    function brochuresController($scope, $timeout, dataService, calcService) {
      var sc = $scope;

      sc.prodAttr = dataService.production.brochures;
      sc.primeCost = dataService.primeCost;

      sc.selected = {};

      angular.forEach(sc.prodAttr, function(options, key) {
        sc.selected[key] = options[0];
      });
      sc.selected.quantity = 20;
      sc.selected.format = sc.prodAttr.format[2];

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
        var printing = sc.primeCost.print1060*sel.colored.cost;

        var sheetsA3 = calcService.calcLayout(sel, sc.primeCost);
        var sheets = (printing+sel.sheetsMaterial.cost+sel.sheetsCovering.cost)*sheetsA3;
        var cover = (printing+sel.coverMaterial.cost+sel.coverCovering.cost)*sheetsA3;
        var varData = sel.printVariableData.cost;

        var result = (cover+sheets*sel.sheetsQtt*varData)*sel.amount.gain;

        result = isNaN(result) ? 0 : result;

        return (result * sc.primeCost.usdBelRubl).toFixed(2);
      }



    }


  })();
