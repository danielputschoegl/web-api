var eventHandler = require('../modules/event-handler');

eventHandler.subscribe('weight', function (data) {
    // TODO safe data to DB

    io.emit('weight', data);
});