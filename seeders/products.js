'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Products', [{
            id: 1,
            name: 'Bagger',
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            id: 2,
            name: 'Radlader',
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Products', null, {});
    }
};
