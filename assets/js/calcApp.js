(function() {

  angular
      .module('calcApp', [])
      .controller('MainCtrl', MainCtrl);


      MainCtrl.$inject = ['$scope'];
      function MainCtrl($scope) {
        $scope.prodBase = [
            {
              prodName: 'Визитки',
              prices: [
                  {tirazh: 100, price: 17.88},
                  {tirazh: 200, price: 16.53},
                  {tirazh: 300, price: 15.34},
                  {tirazh: 500, price: 12.99},
                  {tirazh: 1000, price: 10.84}
                ],
              details: [
                  {tag: 'двухсторонние', factor: 1},
                  {tag: 'односторонние', factor: 0.75},
                  {tag: 'скругление', factor: 2}
                ],
              material: [
                   {tag: 'бумага 350 г/м', factor: 1},
                   {tag: 'бумага 250 г/м', factor: 1},
                   {tag: 'бумага дизайнерская', factor: 2},
                   {tag: 'бумага дизайнерская', factor: 2}
                 ],
              formFields: [
                ''
              ]
            },
            {
              prodName: 'Виниловые магниты'
            },
            {
              prodName: 'Наклейки'
            },
            {
              prodName: 'Календари'
            },
            {
              prodName: 'Блокноты'
            },
            {
              prodName: 'Конверты'
            },
            {
              prodName: 'Листовки, буклеты'
            },
            {
              prodName: 'Бумажные пакеты'
            }
          ];

        $scope.product = $scope.prodBase[0];



      }

})();
