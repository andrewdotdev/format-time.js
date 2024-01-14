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
 * @param {object} op - Opciones (leer los types)
 * @returns {string} - La duración formateada
 */
function format(ms, op) {
    const milisegundos = ms % 1000;
    let segundos = Math.floor((ms / 1000) % 60);
    let minutos = Math.floor((ms / (1000 * 60)) % 60);
    let horas = Math.floor((ms / (1000 * 60 * 60)) % 24);
    let dias = Math.floor(ms / (1000 * 60 * 60 * 24));

    const withMs = op && op.withMs;
    const complete = op && op.complete;

    let resultado = "";

    if (dias > 0) {
        resultado += `${dias}:`;
    }

    resultado += `${horas < 10 ? "0" : ""}${horas}:`;
    resultado += `${minutos < 10 ? "0" : ""}${minutos}:`;
    resultado += `${segundos < 10 ? "0" : ""}${segundos}`;

    if (withMs) {
        resultado += `.${milisegundos}`;
    }

    if (complete) {
        resultado = `${dias > 0 ? `${dias}d ` : ""}${horas > 0 ? `${horas}h ` : ""}${minutos}m ${segundos}s`;

        if (withMs) {
            resultado += ` ${milisegundos}ms`;
        }
    }

    return resultado;
}

module.exports = { format };
