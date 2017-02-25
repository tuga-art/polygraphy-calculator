(function () {
  'use strict'

  angular
      .module('calcApp')
      .factory('calcService', calcService);

    // dataService.$inject = [];

    function calcService() {
      var service = {};
      service.calcLayout = calcLayout;
      service.calcBinding = calcBinding;

      // return number of sheets SRA3 needed for given quantity and size
      function calcLayout(sel, primeCost) {
        // available area depends on need plotter cutting or not
        var area;
        if (sel.crooked) {
          area = sel.crooked.cost ? primeCost.plotterArea : primeCost.printArea;
        } else {
          area = primeCost.printArea;
        }

        var along = Math.floor(area.side1/sel.format.side1) * Math.floor(area.side2/sel.format.side2);
        var across = Math.floor(area.side1/sel.format.side2) * Math.floor(area.side2/sel.format.side1);

        var onOneSheet = Math.max(along, across);
        console.log('=> max units '+sel.format.side1+'x'+sel.format.side2+' on SRA3 is: ' + onOneSheet);

        // depends on <input> or <select> amount of units provided to user
        var itemsQtt = sel.quantity ? sel.quantity : sel.amount.tag;
        var sheetNum = (itemsQtt/onOneSheet).toFixed(3);
        console.log('for '+itemsQtt+' units is needed '+sheetNum+' SRA3');

        return Math.ceil(sheetNum);
      }

      // return cost of spring to bind current item on short or long side
      function calcBinding(sel) {
        var springStep = 8.5;
        var cost = sel.spring.cost;
        var springCoils;

        if (sel.binding.info == 'shortSide') {
            springCoils = Math.min(sel.format.side1, sel.format.side2)/springStep - 1;
          }
        if (sel.binding.info == 'longSide') {
            springCoils = Math.max(sel.format.side1, sel.format.side2)/springStep - 1;
          }
        if (sel.binding.info == 'glue') {
            return sel.binding.cost;
          }
        console.log('for 1 unit is needed spring coils: '+Math.floor(springCoils));
        return springCoils*cost;
      }

      return service;
    }


})();
