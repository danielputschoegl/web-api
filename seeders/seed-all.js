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
            {id: '00014894600001L30', name: 'Entsperrbares Rueckschlagventil', created_at: new Date(), updated_at: new Date()},
            {id: '00014894600002L30', name: 'RHZ35PLR',  created_at: new Date(), updated_at: new Date()},
            {id: '00014894600003L30', name: 'Distanzblech', created_at: new Date(), updated_at: new Date()},
            {id: '00014894600004L30', name: 'Pedal ZH innen', created_at: new Date(), updated_at: new Date()},
            {id: '00014894600005L30', name: 'Kippschalter', created_at: new Date(), updated_at: new Date()},
            {id: '00014894010001L30', name: 'Motorwinkel', created_at: new Date(), updated_at: new Date()},
            {id: '00014894010002L30', name: 'Gelenklasche links bearbeitet', created_at: new Date(), updated_at: new Date()},
            {id: '00014894010003L30', name: 'Rückschlagventil + Saugfilter', created_at: new Date(), updated_at: new Date()},
            {id: '00014894010004L30', name: 'Motorwinkel', created_at: new Date(), updated_at: new Date()},
            {id: '00014894010005L30', name: 'Klemmbügel 2', created_at: new Date(), updated_at: new Date()},
            {id: '00014894010006L30', name: 'Luftduese', created_at: new Date(), updated_at: new Date()},
            {id: '00014894010007L30', name: 'Rueckschlagventil', created_at: new Date(), updated_at: new Date()},
            {id: '00014894010008L30', name: 'Jogdial Standard', created_at: new Date(), updated_at: new Date()},
            {id: '00014894010009L30', name: 'Gaspedal 2701', created_at: new Date(), updated_at: new Date()},
            {id: '00014894010010L30', name: 'HSWS Ventil', created_at: new Date(), updated_at: new Date()},
            {id: '00014894010011L30', name: 'Gummi-Metall-Büchse', created_at: new Date(), updated_at: new Date()},
            {id: '00014894010012L30', name: 'Scharnierwinkel', created_at: new Date(), updated_at: new Date()},
            {id: '00014894010013L30', name: 'Schalter mit Sperre', created_at: new Date(), updated_at: new Date()},
            {id: '00014894010014L30', name: 'Motorwinkel', created_at: new Date(), updated_at: new Date()},
            {id: '00014894010015L30', name: 'Hydrolager V1500', created_at: new Date(), updated_at: new Date()},
            {id: '00014894010016L30', name: 'Winkelgelenk AS13', created_at: new Date(), updated_at: new Date()},
            {id: '00014894010017L30', name: 'Motorwinkel Pumpe', created_at: new Date(), updated_at: new Date()},
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
            {
                part_id: '00014894010016L30',
                c_brick_id: 100000943,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 1
            },
            {
                part_id: '00014894010014L30',
                c_brick_id: 100000943,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 2
            },
            {
                part_id: '00014894010002L30',
                c_brick_id: 100000943,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 3
            },
            {
                part_id: '00014894600003L30',
                c_brick_id: 100000943,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 4
            },
            {
                part_id: '00014894600005L30',
                c_brick_id: 100000943,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 5
            },
            {
                part_id: '00014894010013L30',
                c_brick_id: 100000943,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 6
            },
            {
                part_id: '00014894010008L30',
                c_brick_id: 100000943,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 7
            },
            {
                part_id: '00014894010001L30',
                c_brick_id: 100000943,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 8
            },
            {
                part_id: '00014894010010L30',
                c_brick_id: 100000949,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 9
            },
            {
                part_id: '00014894010009L30',
                c_brick_id: 100000949,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 10
            },
            {
                part_id: '00014894010015L30',
                c_brick_id: 100000949,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 11
            },
            {
                part_id: '00014894010004L30',
                c_brick_id: 100000952,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 12
            },
            {
                part_id: '00014894010005L30',
                c_brick_id: 100000959,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 13
            },
            {
                part_id: '00014894010006L30',
                c_brick_id: 100000959,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 14
            },
            {
                part_id: '00014894600002L30',
                c_brick_id: 100000965,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 15
            },
            {
                part_id: '00014894010003L30',
                c_brick_id: 100000965,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 16
            },
            {
                part_id: '00014894010007L30',
                c_brick_id: 100001007,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 17
            },
            {
                part_id: '00014894600001L30',
                c_brick_id: 100001114,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 18
            },
            {
                part_id: '00014894010012L30',
                c_brick_id: 100001116,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 19
            },
            {
                part_id: '00014894010011L30',
                c_brick_id: 100001143,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 20
            },
            {
                part_id: '00014894600004L30',
                c_brick_id: 100001181,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 21
            },
            {
                part_id: '00014894010017L30',
                c_brick_id: 100001181,
                created_at: new Date(),
                updated_at: new Date(),
                sequence: 22
            },
        ], {});
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Processes', null, {});
        await queryInterface.bulkDelete('cBricks', null, {});
        await queryInterface.bulkDelete('Parts', null, {});
        return queryInterface.bulkDelete('cBrick_Part', null, {});
    }
};
