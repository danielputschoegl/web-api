'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('cBricks', [
            {
                cbrick_id: 10000000268,
                name: 'HM Allg Auftrag lesen',
                actual_time: 0.59,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000000291,
                name: 'HM Allg Auftrag Buchen',
                actual_time: 0.30,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000000943,
                name: 'HM Fahrwerk DDF Mont. Stand',
                actual_time: 1.46,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000000944,
                name: 'HM Fahrwerk Transport Montagewagen Weitertakten Stand',
                actual_time: 0.34,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000000949,
                name: 'HM E12 Hydraulik Schlauchl. Fahrantr. Bereitst. Garn. Stand',
                actual_time: 0.65,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000000952,
                name: 'HM E12 Hydraulik Schlauchl. Fahrantr. Mont. an DDF Stand',
                actual_time: 5.63,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000000955,
                name: 'HM E12 Fahrwerk Spannlager Links Mont. Stand',
                actual_time: 1.56,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000000957,
                name: 'HM E12 Fahrwerk Spannlager Rechts Mont. Stand',
                actual_time: 1.51,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000000959,
                name: 'HM E12 Fahrwerk Spannlager Vormont. Stand',
                actual_time: 0.80,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000000961,
                name: 'HM E12 Fahrwerk Fahrantrieb Werkzeug Bereitstellen Stand',
                actual_time: 0.19,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000000963,
                name: 'HM E12 Fahrwerk Fahrantrieb Montagewagen Bereitstellen Stand',
                actual_time: 0.38,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000000965,
                name: 'HM E12 Hydraulik Schlauchl. Planiersch. Mont. an DDF Stand',
                actual_time: 1.94,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000000968,
                name: 'HM E12 Hydraulik Schlauchl. Telefahrw. Mont. an DDF Option*',
                actual_time: 1.14,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001007,
                name: 'HM E12.2 Hydraulik Schlauchl. Winkelverschr. Mont. an Fahrantrieb Stand',
                actual_time: 1.12,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001012,
                name: 'HM E12 Hydraulik Schlauchl. Fahrantrieb Kabelbinder an Schlauchleitung Stand',
                actual_time: 0.91,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001014,
                name: 'HM E12 Hydraulik Schlauchl. Fahrantrieb Anschliessen Fahrantrieb Stand',
                actual_time: 5.99,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001075,
                name: 'HM E12.2 Hydraulik Schlauchl. Planiers. Mont. Schellenk. an Fahrwerk Stand',
                actual_time: 1.17,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001088,
                name: 'HM E12 Fahrwerk Telefahrw. Telezyl. Konservieren Bolzen Opt*',
                actual_time: 0.87,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001091,
                name: 'HM E12 Fahrwerk Telefahrw. Telezyl. Mont. Spannstift Opt*',
                actual_time: 0.39,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001094,
                name: 'HM E12 Fahrwerk VDS Kippzyl. Mont. Spannstift Opt*',
                actual_time: 0.39,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001096,
                name: 'HM E12 Fahrwerk Manipulator Drehen Radial Stand',
                actual_time: 0.35,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001098,
                name: 'HM E12 Fahrwerk Telefahrw. Magnet Mont. an Fahrwerk Opt*',
                actual_time: 0.08,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001100,
                name: 'HM E12 Fahrwerk Kranen in Drehmanipulator Stand',
                actual_time: 2.76,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001106,
                name: 'HM E12.2 Fahrwerk Führungsrolle Schrauben Vorb. Stand',
                actual_time: 1.47,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001114,
                name: 'HM E12.2 Fahrwerk Fahrantrieb Antriebsrad Vormontieren Stand',
                actual_time: 4.46,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001116,
                name: 'HM E12.2 Fahrwerk Fahrantrieb Mont. Stand',
                actual_time: 5.49,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001118,
                name: 'HM E12.2 Fahrwerk Gleitplatte Mont. Stand',
                actual_time: 2.24,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001121,
                name: 'HM E12.2 Fahrwerk Führungsrolle Vorb. Stand',
                actual_time: 2.04,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001136,
                name: 'HM E12.2 Fahrwerk Führungsrolle Mont. Stand',
                actual_time: 1.43,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001143,
                name: 'HM E12.2 Fahrwerk Telefahrw. Distanzscheibe Mont. Gew.Stift Opt*',
                actual_time: 1.41,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001148,
                name: 'HM E12 Fahrwerk Manipulator Drehen Horizontal Stand',
                actual_time: 0.37,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001173,
                name: 'HM E12.2 Fahrwerk VDS Kippkonsole Mont. Option*',
                actual_time: 7.20,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001181,
                name: 'HM E12.2 Hydraulik Schlauchltg. VDS Mont. an Kippzylinder Option*',
                actual_time: 2.03,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {
                cbrick_id: 10000001190,
                name: 'HM E12.2 Fahrwerk Gewinde schneiden Abdeckung Stand',
                actual_time: 0.75,
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Processes', null, {});
    }
};
