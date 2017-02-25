(function () {
  'use strict'

  angular
      .module('calcApp')
      .factory('dataService', dataService);

    // dataService.$inject = [];

    function dataService() {
      var service = {};

      service.primeCost  = {
        usdBelRubl: 2,
        print7800: 0.2150,
        print1060: 0.1000,
        printArea: {side1: 440, side2: 310},
        plotterArea: {side1: 365, side2: 270},
        printVariableData: [
          {tag: '----', cost: 0},
          {tag: 'переменные данные', cost: 0.1}
        ],
        colored: [
          {tag: '-- без печати --', cost: 0},
          {tag: 'односторонняя цветная (4+0)', cost: 1},
          {tag: 'двухсторонняя цветная (4+4)', cost: 1.6}
        ],
        coatedPapers: [
          {tag: 'бумага мелованная 350гр/м', cost: 0.0850},
          {tag: 'бумага мелованная 300гр/м', cost: 0.0700},
          {tag: 'бумага мелованная 250гр/м', cost: 0.0714},
          {tag: 'бумага мелованная 200гр/м', cost: 0.0570},
          {tag: 'бумага мелованная 170гр/м', cost: 0.0462},
          {tag: 'бумага мелованная 150гр/м', cost: 0.0414},
          {tag: 'бумага мелованная 130гр/м', cost: 0.0354},
          {tag: 'бумага мелованная 115гр/м', cost: 0.0312},
          {tag: 'бумага мелованная 90гр/м', cost: 0.0280}
        ],
        offsetPapers: [
          {tag: 'бумага офсетная 85гр/м', cost: 0.0190}
        ],
        designPapers: [
          {tag: 'бумага фактурная "лён"', cost: 0.3684},
          {tag: 'бумага "маджестик" Shyne', cost: 0.6316},
          {tag: 'прозрачный пластик', cost: 0.6000},
          {tag: 'Ispira, 360', cost: 1.0000}
        ],
        selfAdhesive: [
          {tag: 'бумажные', cost: 0.1300},
          {tag: 'полимерные белые', cost: 0.7100},
          {tag: 'полимерные прозрачные', cost: 2.0000},
          {tag: 'саморазрушающиеся', cost: 3.1250}
        ],
        covering: [
          {tag: '----', cost: 0},
          {tag: 'ламинат глянцевый, 27мк', cost: 0.0275},
          {tag: 'ламинат глянцевый, 75мк', cost: 0.1300},
          {tag: 'ламинат глянцевый, 125мк', cost: 0.1667},
          {tag: 'ламинат глянцевый, 250мк', cost: 0.2760},
          {tag: 'ламинат матовый, 27мк', cost: 0.0300},
          {tag: 'ламинат матовый, 75мк', cost: 0.2350},
          {tag: 'ламинат матовый, 125мк', cost: 0.2867},
          {tag: 'ламинат софт-тач, 30мк', cost: 0.1250},
          {tag: 'ламинат лён, 50мк', cost: 0.2725}
        ],
        format: [
          {tag: 'другой', side1: '', side2: '', editable: true},
          {tag: '"визитка"', side1: 90, side2: 50},
          {tag: 'A7', side1: 105, side2: 74},
          {tag: 'A6', side1: 148, side2: 105},
          {tag: 'A5', side1: 210, side2: 148},
          {tag: 'A4', side1: 297, side2: 210},
          {tag: 'A3', side1: 420, side2: 297}
        ],
        envelopes: [
          {tag: 'DL', cost: 0.0182, side1: 220, side2: 110},
          {tag: 'C6', cost: 0.0118, side1: 114, side2: 162},
          {tag: 'C5', cost: 0.0250, side1: 162, side2: 229},
          {tag: 'C4', cost: 0.0475, side1: 229, side2: 324},
          {tag: 'B4', cost: 0.1063, side1: 250, side2: 353}
        ],
        roundCorners: [
          {tag: '----', cost: 0},
          {tag: 'скругление углов', cost: 0.001}
        ],
        folding: [
          {tag: '1-2 фальца', cost: 0.005},
          {tag: '3-4 фальца', cost: 0.008}
        ],
        cringle: [
          {tag: '-- нет --', cost: 0},
          {tag: 'да', cost: 0.0107}
        ],
        cord: {tag: '0,5м одна ручка пакета', cost: 0.025},
        spring: [
          {tag: 'диаметр 6.4мм', cost: 0.0006},
          {tag: 'диаметр 8мм', cost: 0.0010},
          {tag: 'диаметр 14,3мм', cost: 0.0027}
        ]


      };


      service.production = {

        // #########################################################
        // BUSINESS CARDS
        // #########################################################
        vizitki: {
          amount: [
            {tag: 100, gain: 9.0},
            {tag: 200, gain: 8.6},
            {tag: 300, gain: 8.1},
            {tag: 400, gain: 7.8},
            {tag: 500, gain: 7.0},
            {tag: 600, gain: 7.0},
            {tag: 700, gain: 7.0},
            {tag: 800, gain: 6.5},
            {tag: 900, gain: 6.5},
            {tag: 1000, gain: 6},
            {tag: 2000, gain: 6},
            {tag: 3000, gain: 6},
            {tag: 4000, gain: 6},
            {tag: 5000, gain: 6},
            {tag: 10000, gain: 6}
          ],
          format: [
            {tag: '90x50'},
            {tag: '85x55'}
          ],
          material: [
            service.primeCost.coatedPapers[0],
            service.primeCost.designPapers[0],
            service.primeCost.designPapers[1],
            service.primeCost.designPapers[2],
          ],
          colored: [
            service.primeCost.colored[1],
            service.primeCost.colored[2],
          ],
          covering: service.primeCost.covering,
          roundCorners: service.primeCost.roundCorners,
          perforation: [
            {tag: '----', cost: 0},
            {tag: 'с перфорацией', cost: 0.025}
          ],
          printVariableData: service.primeCost.printVariableData
        },
        // #########################################################
        // MAGNETS
        // #########################################################
        magnets: {
          amount: [
            {tag: 50, gain: 5},
            {tag: 60, gain: 5},
            {tag: 70, gain: 5},
            {tag: 80, gain: 5},
            {tag: 100, gain: 5},
          ],
          format: [
            service.primeCost.format[1],
            service.primeCost.format[2],
            service.primeCost.format[3],
            service.primeCost.format[4],
            service.primeCost.format[5],
            service.primeCost.format[0]
          ],
          basis: [
            {tag: '0,4 мм', cost: 0.5830},
            {tag: '0,7 мм', cost: 1.4650},
            {tag: '0,4 мм +повыш. жесткость', cost: 1.0000}
          ],
          covering: [
            service.primeCost.covering[1],
            service.primeCost.covering[5]
          ],
          roundCorners: service.primeCost.roundCorners,
          crooked: [
            {tag: '----', cost: 0},
            {tag: 'криволинейный контур', cost: 0.18}
          ],
          printVariableData: service.primeCost.printVariableData,
          notePad: [
            {tag: '----', selected: false},
            {tag: 'блок для записей', selected: true}
          ],
          sheetSize: [
            {tag: '70x70', cost: 1.050},
            {tag: '80x80', cost: 1.055},
            {tag: '90x90', cost: 1.060},
            {tag: '60x80', cost: 1.0355}
          ],
          sheetQtt: [
            {tag: 30, cost: 0.6},
            {tag: 40, cost: 0.8},
            {tag: 50, cost: 0.5}
          ],
          sheetPrint: [
            {tag: '-- без печати --', cost: 0}
          ]
        },
        // #########################################################
        // STICKERS
        // #########################################################
        stickers: {
          amount: [
            {tag: 100, gain: 5},
            {tag: 200, gain: 5},
            {tag: 300, gain: 5},
            {tag: 400, gain: 5},
            {tag: 500, gain: 5},
          ],
          format: [
            service.primeCost.format[2],
            service.primeCost.format[3],
            service.primeCost.format[4],
            service.primeCost.format[5],
            service.primeCost.format[0]
          ],
          material: service.primeCost.selfAdhesive,
          covering: [
            service.primeCost.covering[0],
            service.primeCost.covering[1],
            service.primeCost.covering[5]
          ],
          crooked: [
            {tag: 'прямоугольная', cost: 0.1},
            {tag: 'фигурная', cost: 0.13}
          ],
          printVariableData: service.primeCost.printVariableData
        },
        // #########################################################
        // NOTEBOOKS
        // #########################################################
        notebooks: {
          amount: [
            {tag: 20, gain: 9.0},
            {tag: 50, gain: 8.5},
            {tag: 100, gain: 8.0},
            {tag: 200, gain: 7.5}
          ],
          format: [
            service.primeCost.format[2],
            service.primeCost.format[3],
            service.primeCost.format[4],
            service.primeCost.format[5],
            service.primeCost.format[0]
          ],
          binding: [
            {tag: 'пружина по короткой стороне', info: 'shortSide'},
            {tag: 'пружина по длинной стороне', info: 'longSide'},
            {tag: 'переплет на клей', cost: 0.1, info: 'glue'}
          ],
          spring: [
            service.primeCost.spring[1]
          ],
          sheetsQtt: [
            {tag: 10, cost: 1.70},
            {tag: 20, cost: 1.75},
            {tag: 30, cost: 1.80},
            {tag: 40, cost: 1.90},
            {tag: 50, cost: 1.95},
            {tag: 60, cost: 2.00},
            {tag: 70, cost: 2.05},
            {tag: 80, cost: 2.10}
          ],
          sheetsMaterial: [
            service.primeCost.offsetPapers[0],
            service.primeCost.coatedPapers[8]
          ],
          sheetsColored: [
            {tag: '-- без печати --', cost: 0},
            {tag: '1+0', cost: 0.2},
            {tag: '4+0', cost: 0.3},
            {tag: '4+4', cost: 0.4}
          ],
          frontCoverMaterial: [
            service.primeCost.coatedPapers[1],
            service.primeCost.coatedPapers[0]
          ],
          frontCoverColored: [
            service.primeCost.colored[1],
            service.primeCost.colored[2]
          ],
          frontCoverCovering: [
            service.primeCost.covering[0],
            service.primeCost.covering[1],
            service.primeCost.covering[5],
            service.primeCost.covering[8]
          ],
          backCoverMaterial: [
            service.primeCost.coatedPapers[1],
            service.primeCost.coatedPapers[0]
          ],
          backCoverColored: [
            service.primeCost.colored[0],
            service.primeCost.colored[1],
            service.primeCost.colored[2]
          ],
          backCoverCovering: [
            service.primeCost.covering[0],
            service.primeCost.covering[1],
            service.primeCost.covering[5],
            service.primeCost.covering[8]
          ],
          printVariableData: service.primeCost.printVariableData
        },
        // #########################################################
        // ENVELOPES
        // #########################################################
        envelopes: {
          amount: [
            {tag: 20, gain: 6.0},
            {tag: 50, gain: 5.5},
            {tag: 100, gain: 5.0},
            {tag: 200, gain: 4.5}
          ],
          format: [
            service.primeCost.envelopes[0],
            service.primeCost.envelopes[1],
            service.primeCost.envelopes[2],
            service.primeCost.envelopes[3],
            service.primeCost.envelopes[4]
          ],
          colored: [
            service.primeCost.colored[1]
          ],
          printVariableData: service.primeCost.printVariableData
        },
        // #########################################################
        // LEAFLETS (ЛИСТОВКИ)
        // #########################################################
        leaflets: {
          amount: [
            {tag: 100, gain: 3.0},
            {tag: 300, gain: 2.7},
            {tag: 800, gain: 2.3},
            {tag: 1000, gain: 2.1}
          ],
          format: [
            {tag: 'флаер', side1: 210, side2: 98},
            service.primeCost.format[2],
            service.primeCost.format[3],
            service.primeCost.format[4],
            service.primeCost.format[5],
            service.primeCost.format[6],
            service.primeCost.format[0]
          ],
          material: [
            service.primeCost.coatedPapers[8],
            service.primeCost.coatedPapers[7],
            service.primeCost.coatedPapers[6],
            service.primeCost.coatedPapers[5],
            service.primeCost.coatedPapers[4],
            service.primeCost.coatedPapers[3],
            service.primeCost.coatedPapers[2],
            service.primeCost.coatedPapers[1],
            service.primeCost.coatedPapers[0]
          ],
          colored: [
            service.primeCost.colored[1],
            service.primeCost.colored[2]
          ],
          printVariableData: service.primeCost.printVariableData
        },
        // #########################################################
        // BOOKLETS
        // #########################################################
        booklets: {
          amount: [
            {tag: 100, gain: 3.0},
            {tag: 300, gain: 2.7},
            {tag: 800, gain: 2.3},
            {tag: 1000, gain: 2.1}
          ],
          format: [
            {tag: 'как назвать эту херню?', side1: 210, side2: 200},
            service.primeCost.format[2],
            service.primeCost.format[3],
            service.primeCost.format[4],
            service.primeCost.format[5],
            service.primeCost.format[6],
            service.primeCost.format[0]
          ],
          material: [
            service.primeCost.coatedPapers[8],
            service.primeCost.coatedPapers[7],
            service.primeCost.coatedPapers[6],
            service.primeCost.coatedPapers[5],
            service.primeCost.coatedPapers[4],
            service.primeCost.coatedPapers[3],
            service.primeCost.coatedPapers[2],
            service.primeCost.coatedPapers[1],
            service.primeCost.coatedPapers[0]
          ],
          colored: [
            service.primeCost.colored[1],
            service.primeCost.colored[2]
          ],
          folding: [
            service.primeCost.folding[0],
            service.primeCost.folding[1]
          ],
          printVariableData: service.primeCost.printVariableData
        },
        // #########################################################
        // BROCHURES
        // #########################################################
        brochures: {
          amount: [
            {tag: 20, gain: 3.0},
            {tag: 50, gain: 2.7},
            {tag: 100, gain: 2.4},
            {tag: 200, gain: 2.3},
            {tag: 300, gain: 2.2},
            {tag: 500, gain: 2.1}
          ],
          format: [
            service.primeCost.format[2],
            service.primeCost.format[3],
            service.primeCost.format[4],
            service.primeCost.format[5],
            service.primeCost.format[6],
            service.primeCost.format[0]
          ],
          sheetsQtt: [4,8,12,16,24,28,32,36,40,44,48],
          colored: [
            service.primeCost.colored[2]
          ],
          sheetsMaterial: [
            service.primeCost.coatedPapers[8],
            service.primeCost.coatedPapers[7],
            service.primeCost.coatedPapers[6],
            service.primeCost.coatedPapers[5],
            service.primeCost.coatedPapers[4],
            service.primeCost.coatedPapers[3],
            service.primeCost.coatedPapers[2],
            service.primeCost.coatedPapers[1],
            service.primeCost.coatedPapers[0]
          ],
          sheetsCovering: [
            service.primeCost.covering[0],
            service.primeCost.covering[1],
            service.primeCost.covering[5],
            service.primeCost.covering[8]
          ],
          coverMaterial: [
            service.primeCost.coatedPapers[8],
            service.primeCost.coatedPapers[7],
            service.primeCost.coatedPapers[6],
            service.primeCost.coatedPapers[5],
            service.primeCost.coatedPapers[4],
            service.primeCost.coatedPapers[3],
            service.primeCost.coatedPapers[2],
            service.primeCost.coatedPapers[1],
            service.primeCost.coatedPapers[0]
          ],
          coverCovering: [
            service.primeCost.covering[0],
            service.primeCost.covering[1],
            service.primeCost.covering[5],
            service.primeCost.covering[8]
          ],
          printVariableData: service.primeCost.printVariableData
        },
        // #########################################################
        // BAGS
        // #########################################################
        bags: {
          amount: [],
          format: [
            {tag: 'A4 вертикальный (320x225x80мм)'},
            {tag: 'A4 горизонтальный (225x320x80мм)'}
          ],
          material: [
            service.primeCost.coatedPapers[5],
            service.primeCost.coatedPapers[4],
            service.primeCost.coatedPapers[3]
          ],
          colored: service.primeCost.colored[2],
          covering: [
            service.primeCost.covering[0],
            service.primeCost.covering[1],
            service.primeCost.covering[5],
            service.primeCost.covering[8]
          ],
          cringle: [
            service.primeCost.cringle[0],
            service.primeCost.cringle[1]
          ],
          other: {tag: 'скотч и картонные вставки', cost: 0.1}
        }

      };

      return service;
    }


})();
