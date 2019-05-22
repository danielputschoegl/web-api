var eventHandler = require('../modules/event-handler');

eventHandler.subscribe('weight', function (data) {
    console.log('test');

    io.emit('weight', data.weight);
});