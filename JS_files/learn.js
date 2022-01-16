const LOCAL_FORECAST = {
    today: { min: 24, max: 69 },
    tomorrow: { min: 15, max: 68 }
};

function getMaxOfTmrw(getMax) {
    "use strict";

    const { tomorrow : { max : maxOfTmrw}} = getMax;
    return maxOfTmrw;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));