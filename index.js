// Adaptado de https://github.com/sindresorhus/parse-ms
function parseMs(ms) {
    if (typeof ms !== 'number') {
        throw new TypeError('Se esperaba un número');
    }

    return {
        days: Math.trunc(ms / 86400000),
        hours: Math.trunc(ms / 3600000) % 24,
        minutes: Math.trunc(ms / 60000) % 60,
        seconds: Math.trunc(ms / 1000) % 60,
        ms: Math.trunc(ms) % 1000
    };
}

// Adaptado de https://github.com/rafaelrinaldi/add-zero
function addZero(time, digits = 2) {
    let paraString = time.toString();
    digits = digits || 2;

    let capacity = digits - paraString.length + 1;
    let result = new Array(capacity).join('0').concat(paraString);

    return result;
}

function cvv(d, sm) {
    if (sm) {
        if (d < 0) {
            return '-';
        } else {
            return '';
        }
    } else {
        if (d <= -1000) {
            return '-';
        } else {
            return '';
        }
    }
}

/**
 * 
 * @param {number} ms - Milisegundos
 * @param {object} op - Opciones (en la interfaz options)
 * @returns {string} - La duración formateada
 */
function format(ms, op) {
    const MnOp = op?.ld ?? false;
    const QrSt = ms < 0 ? -ms : ms;
    const UvWx = cvv(ms, MnOp);
    const YzAb = parseMs(QrSt);
    const CdEf = addZero(YzAb.seconds);

    let GhIj = '';

    if (YzAb.days) {
        GhIj = `${UvWx}${YzAb.days}:${addZero(YzAb.hours)}:${addZero(YzAb.minutes)}:${CdEf}`;
    } else if (YzAb.hours) {
        GhIj = `${UvWx}${op?.millisenconds ? addZero(YzAb.hours) : YzAb.hours}:${addZero(YzAb.minutes)}:${CdEf}`;
    } else {
        GhIj = `${UvWx}${op?.millisenconds ? addZero(YzAb.minutes) : YzAb.minutes}:${CdEf}`;
    }

    if (MnOp) {
        GhIj += `.${addZero(YzAb.ms, 3)}`;
    }

    return GhIj;
}

module.exports = { format };
