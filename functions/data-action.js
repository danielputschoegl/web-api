var eventHandler = require('../modules/event-handler');
var repository = require('../modules/mysql-repository');

eventHandler.subscribe('weight', function (data) {
    // repository.create('record', {
    //     weight: data.weight,
    //     order_id: data.order,
    //     product_component_id: getComponent
    // });

    io.emit('weight', data);
});

function getComponent(data) {
    var lower = 0;
    var upper = 0;

    switch (process.env.RANGE_TYPE) {
        case 'g':
            lower = data.weight - process.env.RANGE;
            upper = data.weight + process.env.RANGE;

            break;
        case '%':
            lower = data.weight - data.weight * (process.env.RANGE / 100);
            upper = data.weight + data.weight * (process.env.RANGE / 100);

            break;
        default:
            lower = data.weight - process.env.RANGE;
            upper = data.weight + process.env.RANGE;

            break;
    }

    return repository.getBy('order_scan', {
        order_id: data.order
    }, [
        ' weight BETWEEN ' + lower + ' AND ' + upper
    ]);
}