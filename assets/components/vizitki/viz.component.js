(function () {

  angular
    .module('calcApp')
    .controller('vizController', vizController)
    .component('vizElem', {
      templateUrl: 'wp-content/plugins/rg-polygraphy-calculator/assets/components/vizitki/viz.tmpl.html',
      controller: 'vizController',
    });


    vizController.$inject = ['$scope', 'dataService'];

    function vizController($scope, dataService) {
      var sc = $scope;

      sc.prodAttr = dataService.production.vizitki;
      sc.primeCost = dataService.primeCost;

      sc.sel = {};

      angular.forEach(sc.prodAttr, function(options, key) {
        sc.sel[key] = options[0];
      });

      sc.ifOffset = false;
      sc.ifTransperent = false;

      sc.$watch('sel', function(newVal, oldVal) {
        sc.totalprice = calculateFinalPrice(newVal);
      }, true);

      sc.$watch('sel.amount', function(newVal, oldVal) {
        if (newVal.tag >= 1000) {
          sc.sel.format = sc.prodAttr.format[0];
          sc.sel.material = sc.prodAttr.material[0];
          sc.sel.covering = sc.prodAttr.covering[1];
          sc.sel.roundCorners = sc.prodAttr.roundCorners[1];
          sc.ifOffset = true;
        } else {
          sc.ifOffset = false;
        }
      });

      sc.$watch('sel.material', function(newVal, oldVal) {
        if (newVal === sc.prodAttr.material[3]) {
          sc.sel.colored = sc.prodAttr.colored[0];
          sc.sel.covering = sc.prodAttr.covering[3];
          sc.ifTransperent = true;
        } else {
          sc.ifTransperent = false;
        }
      });

      function calculateFinalPrice(selected) {
        var printing = sc.primeCost.print1060*selected.colored.cost;
        var material = selected.material.cost;
        var covering = selected.covering.cost*2;
        var corners = selected.roundCorners.cost;
        var perf = selected.perforation.cost;
        var varData = selected.printVariableData.cost;
        var amount = selected.amount.tag/100 * selected.amount.gain;

        var result = (4*(material + printing + covering) + corners + perf + varData)*amount

        return (result * sc.primeCost.usdBelRubl).toFixed(2);
      }

    }

})();
