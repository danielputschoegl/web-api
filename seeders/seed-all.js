'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Process', [{
            id: 16,
            is_milestone: false,
            name: 'Fahrwerksbau - Montage Drehkranz',
            created_at: new Date(),
            updated_at: new Date()
        }, {
            id: 17,
            is_milestone: false,
            name: 'Fahrwerksbau - Montage DDF/Zylinder',
            created_at: new Date(),
            updated_at: new Date()
        }, {
            id: 18,
            is_milestone: false,
            name: 'Fahrwerksbau - Montage Spannlager',
            created_at: new Date(),
            updated_at: new Date()
        }, {
            id: 19,
            is_milestone: true,
            name: 'Fahrwerksbau - Montage Führungsrollen/Ve',
            created_at: new Date(),
            updated_at: new Date()
        }
        ], {});

        await queryInterface.bulkInsert('cBrick', [
            {
                id: 100000268,
                name: 'HM Allg Auftrag lesen',
                actual_time: 0.59,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100000291,
                name: 'HM Allg Auftrag Buchen',
                actual_time: 0.30,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100000943,
                name: 'HM Fahrwerk DDF Mont. Stand',
                actual_time: 1.46,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100000944,
                name: 'HM Fahrwerk Transport Montagewagen Weitertakten Stand',
                actual_time: 0.34,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100000949,
                name: 'HM E12 Hydraulik Schlauchl. Fahrantr. Bereitst. Garn. Stand',
                actual_time: 0.65,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100000952,
                name: 'HM E12 Hydraulik Schlauchl. Fahrantr. Mont. an DDF Stand',
                actual_time: 5.63,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100000955,
                name: 'HM E12 Fahrwerk Spannlager Links Mont. Stand',
                actual_time: 1.56,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100000957,
                name: 'HM E12 Fahrwerk Spannlager Rechts Mont. Stand',
                actual_time: 1.51,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100000959,
                name: 'HM E12 Fahrwerk Spannlager Vormont. Stand',
                actual_time: 0.80,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100000961,
                name: 'HM E12 Fahrwerk Fahrantrieb Werkzeug Bereitstellen Stand',
                actual_time: 0.19,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100000963,
                name: 'HM E12 Fahrwerk Fahrantrieb Montagewagen Bereitstellen Stand',
                actual_time: 0.38,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100000965,
                name: 'HM E12 Hydraulik Schlauchl. Planiersch. Mont. an DDF Stand',
                actual_time: 1.94,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100000968,
                name: 'HM E12 Hydraulik Schlauchl. Telefahrw. Mont. an DDF Option*',
                actual_time: 1.14,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001007,
                name: 'HM E12.2 Hydraulik Schlauchl. Winkelverschr. Mont. an Fahrantrieb Stand',
                actual_time: 1.12,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001012,
                name: 'HM E12 Hydraulik Schlauchl. Fahrantrieb Kabelbinder an Schlauchleitung Stand',
                actual_time: 0.91,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001014,
                name: 'HM E12 Hydraulik Schlauchl. Fahrantrieb Anschliessen Fahrantrieb Stand',
                actual_time: 5.99,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001075,
                name: 'HM E12.2 Hydraulik Schlauchl. Planiers. Mont. Schellenk. an Fahrwerk Stand',
                actual_time: 1.17,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001088,
                name: 'HM E12 Fahrwerk Telefahrw. Telezyl. Konservieren Bolzen Opt*',
                actual_time: 0.87,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001091,
                name: 'HM E12 Fahrwerk Telefahrw. Telezyl. Mont. Spannstift Opt*',
                actual_time: 0.39,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001094,
                name: 'HM E12 Fahrwerk VDS Kippzyl. Mont. Spannstift Opt*',
                actual_time: 0.39,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001096,
                name: 'HM E12 Fahrwerk Manipulator Drehen Radial Stand',
                actual_time: 0.35,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001098,
                name: 'HM E12 Fahrwerk Telefahrw. Magnet Mont. an Fahrwerk Opt*',
                actual_time: 0.08,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001100,
                name: 'HM E12 Fahrwerk Kranen in Drehmanipulator Stand',
                actual_time: 2.76,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001106,
                name: 'HM E12.2 Fahrwerk Führungsrolle Schrauben Vorb. Stand',
                actual_time: 1.47,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001114,
                name: 'HM E12.2 Fahrwerk Fahrantrieb Antriebsrad Vormontieren Stand',
                actual_time: 4.46,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001116,
                name: 'HM E12.2 Fahrwerk Fahrantrieb Mont. Stand',
                actual_time: 5.49,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001118,
                name: 'HM E12.2 Fahrwerk Gleitplatte Mont. Stand',
                actual_time: 2.24,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001121,
                name: 'HM E12.2 Fahrwerk Führungsrolle Vorb. Stand',
                actual_time: 2.04,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001136,
                name: 'HM E12.2 Fahrwerk Führungsrolle Mont. Stand',
                actual_time: 1.43,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001143,
                name: 'HM E12.2 Fahrwerk Telefahrw. Distanzscheibe Mont. Gew.Stift Opt*',
                actual_time: 1.41,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001148,
                name: 'HM E12 Fahrwerk Manipulator Drehen Horizontal Stand',
                actual_time: 0.37,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001173,
                name: 'HM E12.2 Fahrwerk VDS Kippkonsole Mont. Option*',
                actual_time: 7.20,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001181,
                name: 'HM E12.2 Hydraulik Schlauchltg. VDS Mont. an Kippzylinder Option*',
                actual_time: 2.03,
                created_at: new Date(),
                updated_at: new Date()
            }, {
                id: 100001190,
                name: 'HM E12.2 Fahrwerk Gewinde schneiden Abdeckung Stand',
                actual_time: 0.75,
                created_at: new Date(),
                updated_at: new Date()
            }

        ], {});

        await queryInterface.bulkInsert('Part', [
            {id: 100594406, name: 'Fahrantrieb MAG12', created_at: new Date(), updated_at: new Date()},
            {id: 100802325, name: 'Antriebsrad Z=21 1404 CT', created_at: new Date(), updated_at: new Date()},
            {
                id: 100791929,
                name: 'Gewindestift DIN913 M24x20-45H A2C 8.8',
                created_at: new Date(),
                updated_at: new Date()
            },
            {id: 100999728, name: 'Spannlager komplett', created_at: new Date(), updated_at: new Date()},
            {id: 100054200, name: 'EW08LOMDA3C', created_at: new Date(), updated_at: new Date()},
            {id: 100551501, name: 'EL08LOMD', created_at: new Date(), updated_at: new Date()},
            {
                id: 100919224,
                name: 'VERLAENGERUNG GE08LR1/4EDOMD_L=40mm',
                created_at: new Date(),
                updated_at: new Date()
            },
            {id: 100549001, name: 'GE10LR1/4EDOMD', created_at: new Date(), updated_at: new Date()},
            {id: 100437327, name: 'GE10LR1/4ED L=49 MM', created_at: new Date(), updated_at: new Date()},
            {id: 100505708, name: 'ET10LOMD', created_at: new Date(), updated_at: new Date()},
            {id: 100549201, name: 'GE12LREDOMDA3C', created_at: new Date(), updated_at: new Date()},
            {id: 100551001, name: 'EW10LOMD', created_at: new Date(), updated_at: new Date()},
            {id: 100090306, name: 'WEE8LROMDA3C', created_at: new Date(), updated_at: new Date()},
            {id: 100553401, name: 'T08LA3CX', created_at: new Date(), updated_at: new Date()},
            {
                id: 100196924,
                name: 'BG_Fahrwerk teleskop. kompl. (E12-02/52)',
                created_at: new Date(),
                updated_at: new Date()
            },
            {id: 100030026, name: 'Drehdurchführung 10-Kanal', created_at: new Date(), updated_at: new Date()},
            {id: 100292223, name: 'Rueckschlagventil', created_at: new Date(), updated_at: new Date()},
            {
                id: 100683227,
                name: 'SCHLAUCHGARN./Fahrwerk Standard E12-02',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 100683327,
                name: 'SCHLAUCHGARN./Telefahrwerk E12-02,03',
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: 100688027,
                name: 'SCHLAUCHGARN./Fahrw. Tele-VDS E12-02-03',
                created_at: new Date(),
                updated_at: new Date()
            }
        ], {});

        await queryInterface.bulkInsert('Process_cBrick', [
            {process_id: 16, c_brick_id: 100000268, created_at: new Date(), updated_at: new Date()},
            {process_id: 16, c_brick_id: 100000291, created_at: new Date(), updated_at: new Date()},
            {process_id: 16, c_brick_id: 100000944, created_at: new Date(), updated_at: new Date()},
            {process_id: 16, c_brick_id: 100000943, created_at: new Date(), updated_at: new Date()},
            {process_id: 16, c_brick_id: 100000949, created_at: new Date(), updated_at: new Date()},
            {process_id: 16, c_brick_id: 100000952, created_at: new Date(), updated_at: new Date()},
            {process_id: 16, c_brick_id: 100000965, created_at: new Date(), updated_at: new Date()},
            {process_id: 16, c_brick_id: 100001173, created_at: new Date(), updated_at: new Date()},
            {process_id: 16, c_brick_id: 100000968, created_at: new Date(), updated_at: new Date()},
            {process_id: 16, c_brick_id: 100001181, created_at: new Date(), updated_at: new Date()},
            {process_id: 17, c_brick_id: 100000268, created_at: new Date(), updated_at: new Date()},
            {process_id: 17, c_brick_id: 100000291, created_at: new Date(), updated_at: new Date()},
            {process_id: 17, c_brick_id: 100001114, created_at: new Date(), updated_at: new Date()},
            {process_id: 17, c_brick_id: 100001116, created_at: new Date(), updated_at: new Date()},
            {process_id: 17, c_brick_id: 100001118, created_at: new Date(), updated_at: new Date()},
            {process_id: 17, c_brick_id: 100000944, created_at: new Date(), updated_at: new Date()},
            {process_id: 18, c_brick_id: 100000268, created_at: new Date(), updated_at: new Date()},
            {process_id: 18, c_brick_id: 100000963, created_at: new Date(), updated_at: new Date()},
            {process_id: 18, c_brick_id: 100000961, created_at: new Date(), updated_at: new Date()},
            {process_id: 18, c_brick_id: 100000959, created_at: new Date(), updated_at: new Date()},
            {process_id: 18, c_brick_id: 100000955, created_at: new Date(), updated_at: new Date()},
            {process_id: 18, c_brick_id: 100000957, created_at: new Date(), updated_at: new Date()},
            {process_id: 18, c_brick_id: 100001007, created_at: new Date(), updated_at: new Date()},
            {process_id: 18, c_brick_id: 100001014, created_at: new Date(), updated_at: new Date()},
            {process_id: 18, c_brick_id: 100001012, created_at: new Date(), updated_at: new Date()},
            {process_id: 19, c_brick_id: 100000268, created_at: new Date(), updated_at: new Date()},
            {process_id: 19, c_brick_id: 100001100, created_at: new Date(), updated_at: new Date()},
            {process_id: 19, c_brick_id: 100001148, created_at: new Date(), updated_at: new Date()},
            {process_id: 19, c_brick_id: 100001098, created_at: new Date(), updated_at: new Date()},
            {process_id: 19, c_brick_id: 100001088, created_at: new Date(), updated_at: new Date()},
            {process_id: 19, c_brick_id: 100001091, created_at: new Date(), updated_at: new Date()},
            {process_id: 19, c_brick_id: 100001094, created_at: new Date(), updated_at: new Date()},
            {process_id: 19, c_brick_id: 100001190, created_at: new Date(), updated_at: new Date()},
            {process_id: 19, c_brick_id: 100001136, created_at: new Date(), updated_at: new Date()},
            {process_id: 19, c_brick_id: 100001121, created_at: new Date(), updated_at: new Date()},
            {process_id: 19, c_brick_id: 100001106, created_at: new Date(), updated_at: new Date()},
            {process_id: 19, c_brick_id: 100001143, created_at: new Date(), updated_at: new Date()},
            {process_id: 19, c_brick_id: 100001075, created_at: new Date(), updated_at: new Date()},
            {process_id: 19, c_brick_id: 100001096, created_at: new Date(), updated_at: new Date()}
        ], {});

        await queryInterface.bulkInsert('Order', [
            {nr: 'O111111', name: 'Test Order 1', created_at: new Date(), updated_at: new Date()},
            {nr: 'O222222', name: 'Test Order 2', created_at: new Date(), updated_at: new Date()},
            {nr: 'O333333', name: 'Test Order 3', created_at: new Date(), updated_at: new Date()},
            {nr: 'O444444', name: 'Test Order 4', created_at: new Date(), updated_at: new Date()}
        ], {});

        await queryInterface.bulkInsert('Lorry', [
            {created_at: new Date(), updated_at: new Date()},
            {created_at: new Date(), updated_at: new Date()},
            {created_at: new Date(), updated_at: new Date()},
            {created_at: new Date(), updated_at: new Date()}
        ], {});

        await queryInterface.bulkInsert('Process_Order', [
            {order_nr: 'O111111', process_id: '16', created_at: new Date(), updated_at: new Date()},
            {order_nr: 'O111111', process_id: '17', created_at: new Date(), updated_at: new Date()},
            {order_nr: 'O111111', process_id: '18', created_at: new Date(), updated_at: new Date()},
            {order_nr: 'O111111', process_id: '19', created_at: new Date(), updated_at: new Date()},
            {order_nr: 'O222222', process_id: '16', created_at: new Date(), updated_at: new Date()},
            {order_nr: 'O222222', process_id: '17', created_at: new Date(), updated_at: new Date()},
            {order_nr: 'O222222', process_id: '18', created_at: new Date(), updated_at: new Date()},
            {order_nr: 'O222222', process_id: '19', created_at: new Date(), updated_at: new Date()},
            {order_nr: 'O333333', process_id: '16', created_at: new Date(), updated_at: new Date()},
            {order_nr: 'O333333', process_id: '17', created_at: new Date(), updated_at: new Date()},
            {order_nr: 'O333333', process_id: '18', created_at: new Date(), updated_at: new Date()},
            {order_nr: 'O333333', process_id: '19', created_at: new Date(), updated_at: new Date()},
            {order_nr: 'O444444', process_id: '16', created_at: new Date(), updated_at: new Date()},
            {order_nr: 'O444444', process_id: '17', created_at: new Date(), updated_at: new Date()},
            {order_nr: 'O444444', process_id: '18', created_at: new Date(), updated_at: new Date()},
            {order_nr: 'O444444', process_id: '19', created_at: new Date(), updated_at: new Date()}
        ], {});

        await queryInterface.bulkInsert('cBrick_Part', [
            {part_id: 100030026, c_brick_id: 100000943, created_at: new Date(), updated_at: new Date()},
            {part_id: 100054200, c_brick_id: 100000943, created_at: new Date(), updated_at: new Date()},
            {part_id: 100090306, c_brick_id: 100000943, created_at: new Date(), updated_at: new Date()},
            {part_id: 100437327, c_brick_id: 100000943, created_at: new Date(), updated_at: new Date()},
            {part_id: 100549001, c_brick_id: 100000943, created_at: new Date(), updated_at: new Date()},
            {part_id: 100549201, c_brick_id: 100000943, created_at: new Date(), updated_at: new Date()},
            {part_id: 100551501, c_brick_id: 100000943, created_at: new Date(), updated_at: new Date()},
            {part_id: 100919224, c_brick_id: 100000943, created_at: new Date(), updated_at: new Date()},
            {part_id: 100683227, c_brick_id: 100000949, created_at: new Date(), updated_at: new Date()},
            {part_id: 100683327, c_brick_id: 100000949, created_at: new Date(), updated_at: new Date()},
            {part_id: 100688027, c_brick_id: 100000949, created_at: new Date(), updated_at: new Date()},
            {part_id: 100553401, c_brick_id: 100000952, created_at: new Date(), updated_at: new Date()},
            {part_id: 100292223, c_brick_id: 100000959, created_at: new Date(), updated_at: new Date()},
            {part_id: 100999728, c_brick_id: 100000959, created_at: new Date(), updated_at: new Date()},
            {part_id: 100505708, c_brick_id: 100000965, created_at: new Date(), updated_at: new Date()},
            {part_id: 100551001, c_brick_id: 100000965, created_at: new Date(), updated_at: new Date()},
            {part_id: 100054200, c_brick_id: 100001007, created_at: new Date(), updated_at: new Date()},
            {part_id: 100802325, c_brick_id: 100001114, created_at: new Date(), updated_at: new Date()},
            {part_id: 100594406, c_brick_id: 100001116, created_at: new Date(), updated_at: new Date()},
            {part_id: 100791929, c_brick_id: 100001143, created_at: new Date(), updated_at: new Date()},
            {part_id: 100054200, c_brick_id: 100001181, created_at: new Date(), updated_at: new Date()},
        ], {});
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Processes', null, {});
        await queryInterface.bulkDelete('cBricks', null, {});
        await queryInterface.bulkDelete('Parts', null, {});
        return queryInterface.bulkDelete('cBrick_Part', null, {});
    }
};
