var eventHandler = require('../modules/event-handler');

eventHandler.subscribe('weight', function (data) {
    // io.emit('weight', data.totalWeight);
});