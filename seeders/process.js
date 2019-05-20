'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Processes', [{
            id: 1,
            process_id: 16,
            is_milestone: false,
            name: 'Fahrwerksbau - Montage Drehkranz',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            id: 2,
            process_id: 17,
            is_milestone: false,
            name: 'Fahrwerksbau - Montage DDF/Zylinder',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            id: 3,
            process_id: 18,
            is_milestone: false,
            name: 'Fahrwerksbau - Montage Spannlager',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            id: 4,
            process_id: 19,
            is_milestone: true,
            name: 'Fahrwerksbau - Montage Führungsrollen/Ve',
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Processes', null, {});
    }
};
