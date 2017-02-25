(function () {

  angular
    .module('calcApp')
    .controller('notebooksController', notebooksController)
    .component('notebooksElem', {
      templateUrl: 'wp-content/plugins/rg-polygraphy-calculator/assets/components/notebooks/notebooks.tmpl.html',
      controller: 'notebooksController',
    });


    notebooksController.$inject = ['$scope', '$timeout', 'dataService', 'calcService'];

    function notebooksController($scope, $timeout, dataService, calcService) {
      var sc = $scope;

      sc.prodAttr = dataService.production.notebooks;
      sc.primeCost = dataService.primeCost;

      sc.selected = {};

      angular.forEach(sc.prodAttr, function(options, key) {
        sc.selected[key] = options[0];
      });
      sc.selected.quantity = 20;
      sc.selected.format = sc.prodAttr.format[2];
      sc.selected.sheetsQtt = sc.prodAttr.sheetsQtt[4];

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
        var printing = sc.primeCost.print1060;

        var notePad = (sel.sheetsMaterial.cost+sel.sheetsColored.cost)*sel.sheetsQtt.cost;
        var binding = calcService.calcBinding(sel)

        var sheetsA3 = calcService.calcLayout(sel, sc.primeCost);
        var frontPrint = printing*sel.frontCoverColored.cost;
        var frontCover = (frontPrint+sel.frontCoverMaterial.cost+sel.frontCoverCovering.cost)*sheetsA3;
        var backPrint = printing*sel.backCoverColored.cost;
        var backCover = (backPrint+sel.backCoverMaterial.cost+sel.backCoverCovering.cost)*sheetsA3;
        var varData = sel.printVariableData.cost;

        var result = (frontCover+backCover+(varData+notePad+binding)*sel.quantity)*sel.amount.gain;

        result = isNaN(result) ? 0 : result;

        return (result * sc.primeCost.usdBelRubl).toFixed(2);
      }



    }


  })();
