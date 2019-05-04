var repository = require('../modules/mysql-repository');

repository.getAll('product', function (result) {
    if (!result) {
        repository.create('product', {
            name: 'Bagger'
        });

        repository.create('product', {
            name: 'Radlader'
        });
    }
});

repository.getAll('component', function (result) {
    if (!result) {
        repository.create('component', {
            name: 'Schlauch',
            barcode: 46534,
            weight: 45
        });

        repository.create('component', {
            name: 'Schraube',
            barcode: 453434,
            weight: 14
        });

        repository.create('component', {
            name: 'Greifarm',
            barcode: 786345,
            weight: 10
        });

        repository.create('component', {
            name: 'Rad',
            barcode: 122378,
            weight: 200
        });

        repository.create('component', {
            name: 'Kette',
            barcode: 2463463,
            weight: 100
        });

        repository.create('component', {
            name: 'Sitz',
            barcode: 453433,
            weight: 505
        });
    }
});

repository.getAll('orders', function (result) {
    if (!result) {
        repository.create('orders', {
            order_nr: 41515,
            weight: 10,
            product_id: 1
        });
    }
});

repository.getAll('product_component', function (result) {
    if (!result) {
        repository.create('product_component', {
            step: 1,
            amount: 1,
            product_id: 1,
            component_id: 1
        });

        repository.create('product_component', {
            step: 2,
            amount: 4,
            product_id: 1,
            component_id: 2
        });

        repository.create('product_component', {
            step: 3,
            amount: 1,
            product_id: 1,
            component_id: 3
        });

        repository.create('product_component', {
            step: 4,
            amount: 1,
            product_id: 1,
            component_id: 4
        });
    }
});