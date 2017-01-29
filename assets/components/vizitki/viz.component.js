(function () {

  angular
    .module('calcApp')
    .controller('vizController', vizController)
    .component('vizElem', {
      templateUrl: 'wp-content/plugins/rg-polygraphy-calculator/assets/components/vizitki/viz.template.html',
      controller: 'vizController'
    });

    vizController.$inject = ['$scope'];
    function vizController($scope) {
      
    }


})();
