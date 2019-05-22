'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Processes', [{
            process_id: 16,
            is_milestone: false,
            name: 'Fahrwerksbau - Montage Drehkranz',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            process_id: 17,
            is_milestone: false,
            name: 'Fahrwerksbau - Montage DDF/Zylinder',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            process_id: 18,
            is_milestone: false,
            name: 'Fahrwerksbau - Montage Spannlager',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            process_id: 19,
            is_milestone: true,
            name: 'Fahrwerksbau - Montage Führungsrollen/Ve',
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ], {});

        await queryInterface.bulkInsert('cBricks', [
            {
                cbrick_id: 100000268,
                name: 'HM Allg Auftrag lesen',
                actual_time: 0.59,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100000291,
                name: 'HM Allg Auftrag Buchen',
                actual_time: 0.30,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100000943,
                name: 'HM Fahrwerk DDF Mont. Stand',
                actual_time: 1.46,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100000944,
                name: 'HM Fahrwerk Transport Montagewagen Weitertakten Stand',
                actual_time: 0.34,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100000949,
                name: 'HM E12 Hydraulik Schlauchl. Fahrantr. Bereitst. Garn. Stand',
                actual_time: 0.65,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100000952,
                name: 'HM E12 Hydraulik Schlauchl. Fahrantr. Mont. an DDF Stand',
                actual_time: 5.63,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100000955,
                name: 'HM E12 Fahrwerk Spannlager Links Mont. Stand',
                actual_time: 1.56,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100000957,
                name: 'HM E12 Fahrwerk Spannlager Rechts Mont. Stand',
                actual_time: 1.51,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100000959,
                name: 'HM E12 Fahrwerk Spannlager Vormont. Stand',
                actual_time: 0.80,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100000961,
                name: 'HM E12 Fahrwerk Fahrantrieb Werkzeug Bereitstellen Stand',
                actual_time: 0.19,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100000963,
                name: 'HM E12 Fahrwerk Fahrantrieb Montagewagen Bereitstellen Stand',
                actual_time: 0.38,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100000965,
                name: 'HM E12 Hydraulik Schlauchl. Planiersch. Mont. an DDF Stand',
                actual_time: 1.94,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100000968,
                name: 'HM E12 Hydraulik Schlauchl. Telefahrw. Mont. an DDF Option*',
                actual_time: 1.14,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001007,
                name: 'HM E12.2 Hydraulik Schlauchl. Winkelverschr. Mont. an Fahrantrieb Stand',
                actual_time: 1.12,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001012,
                name: 'HM E12 Hydraulik Schlauchl. Fahrantrieb Kabelbinder an Schlauchleitung Stand',
                actual_time: 0.91,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001014,
                name: 'HM E12 Hydraulik Schlauchl. Fahrantrieb Anschliessen Fahrantrieb Stand',
                actual_time: 5.99,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001075,
                name: 'HM E12.2 Hydraulik Schlauchl. Planiers. Mont. Schellenk. an Fahrwerk Stand',
                actual_time: 1.17,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001088,
                name: 'HM E12 Fahrwerk Telefahrw. Telezyl. Konservieren Bolzen Opt*',
                actual_time: 0.87,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001091,
                name: 'HM E12 Fahrwerk Telefahrw. Telezyl. Mont. Spannstift Opt*',
                actual_time: 0.39,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001094,
                name: 'HM E12 Fahrwerk VDS Kippzyl. Mont. Spannstift Opt*',
                actual_time: 0.39,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001096,
                name: 'HM E12 Fahrwerk Manipulator Drehen Radial Stand',
                actual_time: 0.35,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001098,
                name: 'HM E12 Fahrwerk Telefahrw. Magnet Mont. an Fahrwerk Opt*',
                actual_time: 0.08,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001100,
                name: 'HM E12 Fahrwerk Kranen in Drehmanipulator Stand',
                actual_time: 2.76,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001106,
                name: 'HM E12.2 Fahrwerk Führungsrolle Schrauben Vorb. Stand',
                actual_time: 1.47,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001114,
                name: 'HM E12.2 Fahrwerk Fahrantrieb Antriebsrad Vormontieren Stand',
                actual_time: 4.46,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001116,
                name: 'HM E12.2 Fahrwerk Fahrantrieb Mont. Stand',
                actual_time: 5.49,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001118,
                name: 'HM E12.2 Fahrwerk Gleitplatte Mont. Stand',
                actual_time: 2.24,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001121,
                name: 'HM E12.2 Fahrwerk Führungsrolle Vorb. Stand',
                actual_time: 2.04,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001136,
                name: 'HM E12.2 Fahrwerk Führungsrolle Mont. Stand',
                actual_time: 1.43,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001143,
                name: 'HM E12.2 Fahrwerk Telefahrw. Distanzscheibe Mont. Gew.Stift Opt*',
                actual_time: 1.41,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001148,
                name: 'HM E12 Fahrwerk Manipulator Drehen Horizontal Stand',
                actual_time: 0.37,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001173,
                name: 'HM E12.2 Fahrwerk VDS Kippkonsole Mont. Option*',
                actual_time: 7.20,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001181,
                name: 'HM E12.2 Hydraulik Schlauchltg. VDS Mont. an Kippzylinder Option*',
                actual_time: 2.03,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 100001190,
                name: 'HM E12.2 Fahrwerk Gewinde schneiden Abdeckung Stand',
                actual_time: 0.75,
                createdAt: new Date(),
                updatedAt: new Date()
            }

        ], {});

        await queryInterface.bulkInsert('Parts', [
            {part_id: 100594406, name: 'Fahrantrieb MAG12', createdAt: new Date(), updatedAt: new Date()},
            {part_id: 100802325, name: 'Antriebsrad Z=21 1404 CT', createdAt: new Date(), updatedAt: new Date()},
            {part_id: 100791929, name: 'Gewindestift DIN913 M24x20-45H A2C 8.8', createdAt: new Date(), updatedAt: new Date()},
            {part_id: 100999728, name: 'Spannlager komplett', createdAt: new Date(), updatedAt: new Date()},
            {part_id: 100054200, name: 'EW08LOMDA3C', createdAt: new Date(), updatedAt: new Date()},
            {part_id: 100551501, name: 'EL08LOMD', createdAt: new Date(), updatedAt: new Date()},
            {part_id: 100919224, name: 'VERLAENGERUNG GE08LR1/4EDOMD_L=40mm', createdAt: new Date(), updatedAt: new Date()},
            {part_id: 100549001, name: 'GE10LR1/4EDOMD', createdAt: new Date(), updatedAt: new Date()},
            {part_id: 100437327, name: 'GE10LR1/4ED L=49 MM', createdAt: new Date(), updatedAt: new Date()},
            {part_id: 100505708, name: 'ET10LOMD', createdAt: new Date(), updatedAt: new Date()},
            {part_id: 100549201, name: 'GE12LREDOMDA3C', createdAt: new Date(), updatedAt: new Date()},
            {part_id: 100551001, name: 'EW10LOMD', createdAt: new Date(), updatedAt: new Date()},
            {part_id: 100090306, name: 'WEE8LROMDA3C', createdAt: new Date(), updatedAt: new Date()},
            {part_id: 100553401, name: 'T08LA3CX', createdAt: new Date(), updatedAt: new Date()},
            {part_id: 100196924, name: 'BG_Fahrwerk teleskop. kompl. (E12-02/52)', createdAt: new Date(), updatedAt: new Date()},
            {part_id: 100030026, name: 'Drehdurchführung 10-Kanal', createdAt: new Date(), updatedAt: new Date()},
            {part_id: 100292223, name: 'Rueckschlagventil', createdAt: new Date(), updatedAt: new Date()},
            {part_id: 100683227, name: 'SCHLAUCHGARN./Fahrwerk Standard E12-02', createdAt: new Date(), updatedAt: new Date()},
            {part_id: 100683327, name: 'SCHLAUCHGARN./Telefahrwerk E12-02,03', createdAt: new Date(), updatedAt: new Date()},
            {part_id: 100688027, name: 'SCHLAUCHGARN./Fahrw. Tele-VDS E12-02-03', createdAt: new Date(), updatedAt: new Date()}
        ], {});

        await queryInterface.bulkInsert('process_cbrick', [
            {ProcessProcessId: 16, cBrickCbrickId: 100000268, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 16, cBrickCbrickId: 100000291, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 16, cBrickCbrickId: 100000944, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 16, cBrickCbrickId: 100000943, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 16, cBrickCbrickId: 100000949, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 16, cBrickCbrickId: 100000952, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 16, cBrickCbrickId: 100000965, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 16, cBrickCbrickId: 100001173, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 16, cBrickCbrickId: 100000968, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 16, cBrickCbrickId: 100001181, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 17, cBrickCbrickId: 100000268, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 17, cBrickCbrickId: 100000291, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 17, cBrickCbrickId: 100001114, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 17, cBrickCbrickId: 100001116, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 17, cBrickCbrickId: 100001118, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 17, cBrickCbrickId: 100000944, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 18, cBrickCbrickId: 100000268, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 18, cBrickCbrickId: 100000963, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 18, cBrickCbrickId: 100000961, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 18, cBrickCbrickId: 100000959, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 18, cBrickCbrickId: 100000955, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 18, cBrickCbrickId: 100000957, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 18, cBrickCbrickId: 100001007, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 18, cBrickCbrickId: 100001014, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 18, cBrickCbrickId: 100001012, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 19, cBrickCbrickId: 100000268, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 19, cBrickCbrickId: 100001100, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 19, cBrickCbrickId: 100001148, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 19, cBrickCbrickId: 100001098, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 19, cBrickCbrickId: 100001088, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 19, cBrickCbrickId: 100001091, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 19, cBrickCbrickId: 100001094, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 19, cBrickCbrickId: 100001190, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 19, cBrickCbrickId: 100001136, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 19, cBrickCbrickId: 100001121, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 19, cBrickCbrickId: 100001106, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 19, cBrickCbrickId: 100001143, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 19, cBrickCbrickId: 100001075, createdAt: new Date(), updatedAt: new Date()},
            {ProcessProcessId: 19, cBrickCbrickId: 100001096, createdAt: new Date(), updatedAt: new Date()}
        ], {});

        await queryInterface.bulkInsert('orders', [
            {order_nr: 'O111111', name: 'Test Order 1', createdAt: new Date(), updatedAt: new Date()},
            {order_nr: 'O222222', name: 'Test Order 2', createdAt: new Date(), updatedAt: new Date()},
            {order_nr: 'O333333', name: 'Test Order 3', createdAt: new Date(), updatedAt: new Date()},
            {order_nr: 'O444444', name: 'Test Order 4', createdAt: new Date(), updatedAt: new Date()}
        ], {});

        await queryInterface.bulkInsert('process_order', [
            {OrderOrderNr: 'O111111', ProcessProcessId: '16', createdAt: new Date(), updatedAt: new Date()},
            {OrderOrderNr: 'O111111', ProcessProcessId: '17', createdAt: new Date(), updatedAt: new Date()},
            {OrderOrderNr: 'O111111', ProcessProcessId: '18', createdAt: new Date(), updatedAt: new Date()},
            {OrderOrderNr: 'O111111', ProcessProcessId: '19', createdAt: new Date(), updatedAt: new Date()},
            {OrderOrderNr: 'O222222', ProcessProcessId: '16', createdAt: new Date(), updatedAt: new Date()},
            {OrderOrderNr: 'O222222', ProcessProcessId: '17', createdAt: new Date(), updatedAt: new Date()},
            {OrderOrderNr: 'O222222', ProcessProcessId: '18', createdAt: new Date(), updatedAt: new Date()},
            {OrderOrderNr: 'O222222', ProcessProcessId: '19', createdAt: new Date(), updatedAt: new Date()},
            {OrderOrderNr: 'O333333', ProcessProcessId: '16', createdAt: new Date(), updatedAt: new Date()},
            {OrderOrderNr: 'O333333', ProcessProcessId: '17', createdAt: new Date(), updatedAt: new Date()},
            {OrderOrderNr: 'O333333', ProcessProcessId: '18', createdAt: new Date(), updatedAt: new Date()},
            {OrderOrderNr: 'O333333', ProcessProcessId: '19', createdAt: new Date(), updatedAt: new Date()},
            {OrderOrderNr: 'O444444', ProcessProcessId: '16', createdAt: new Date(), updatedAt: new Date()},
            {OrderOrderNr: 'O444444', ProcessProcessId: '17', createdAt: new Date(), updatedAt: new Date()},
            {OrderOrderNr: 'O444444', ProcessProcessId: '18', createdAt: new Date(), updatedAt: new Date()},
            {OrderOrderNr: 'O444444', ProcessProcessId: '19', createdAt: new Date(), updatedAt: new Date()}
        ], {});

        return queryInterface.bulkInsert('cBrick_Part', [
                {PartPartId: 100030026, cBrickcBrickId: 100000943, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100054200, cBrickcBrickId: 100000943, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100090306, cBrickcBrickId: 100000943, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100437327, cBrickcBrickId: 100000943, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100549001, cBrickcBrickId: 100000943, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100549201, cBrickcBrickId: 100000943, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100551501, cBrickcBrickId: 100000943, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100919224, cBrickcBrickId: 100000943, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100683227, cBrickcBrickId: 100000949, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100683327, cBrickcBrickId: 100000949, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100688027, cBrickcBrickId: 100000949, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100553401, cBrickcBrickId: 100000952, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100292223, cBrickcBrickId: 100000959, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100999728, cBrickcBrickId: 100000959, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100505708, cBrickcBrickId: 100000965, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100551001, cBrickcBrickId: 100000965, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100054200, cBrickcBrickId: 100001007, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100802325, cBrickcBrickId: 100001114, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100594406, cBrickcBrickId: 100001116, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100791929, cBrickcBrickId: 100001143, createdAt: new Date(), updatedAt: new Date()},
                {PartPartId: 100054200, cBrickcBrickId: 100001181, createdAt: new Date(), updatedAt: new Date()},
            ],
            {});
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Processes', null, {});
        await queryInterface.bulkDelete('cBricks', null, {});
        await queryInterface.bulkDelete('Parts', null, {});
        return queryInterface.bulkDelete('cBrick_Part', null, {});
    }
};
