var eventHandler = require('../modules/event-handler');

// TODO letzten Wert aus der DB laden
var stable = null; // letzter stable Wert
var last = null; // letzter übergebener Wert
var timer = null;

var time = 1000; // in ms
var range = 5; // in *type* +- vom letzten stable Wert !!! auf Messbereich der Waage achten !!!
var type = 'g'; // [g, %]

eventHandler.subscribe('serial', function (data) {
    // TODO weg sobald aus der DB geladen wird
    if (stable == null) {
        stable = data;
    }

    if (last == null) {
        last = data;
    }

    if (!timer) {
        setTimer(data);
    }

    if (last !== data) {
        clearTimeout(timer);
        timer = null;
    }

    last = data;
});

function setTimer(data) {
    timer = setTimeout(function () {
        var lower = 0;
        var upper = 0;

        switch (type) {
            case 'g':
                lower = stable - range;
                upper = stable + range;

                break;
            case '%':
                lower = stable - stable * (range / 100);
                upper = stable + stable * (range / 100);

                break;
            default:
                lower = stable - range;
                upper = stable + range;

                break;
        }

        if (data <= lower || upper <= data) {
            stable = data;
            eventHandler.publish('weight', data);
        }
    }, time);
}