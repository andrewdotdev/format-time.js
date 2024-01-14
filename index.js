if (typeof ms !== 'number') {
    throw new TypeError('Se esperaba un número');
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

    let resultado;

    if (dias === 0 && horas === 0 && minutos === 0 && segundos !== 0) {
        resultado = `00:${segundos}`;
    } else if (dias === 0 && horas === 0 && minutos !== 0) {
        resultado = `${minutos}:${segundos}`;
    } else if (dias === 0 && horas !== 0) {
        resultado = `${horas}:${minutos}:${segundos}`;
    } else if (dias !== 0) {
        resultado = `${dias}:${horas}:${minutos}:${segundos}`;
    } else {
        resultado = `00:00`
    }

    if (withMs) {
        resultado += `.${milisegundos}`;
    }

    if (complete) {
        if (dias === 0 && horas === 0 && minutos === 0 && segundos !== 0) {
            resultado = `${segundos}s`;
        } else if (dias === 0 && horas === 0 && minutos !== 0) {
            resultado = `${minutos}m ${segundos}s`;
        } else if (dias === 0 && horas !== 0) {
            resultado = `${horas}h ${minutos}m ${segundos}s`;
        } else if (dias !== 0) {
            resultado = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
        } else {
            resultado = `0s`
        }

        if (withMs) {
            resultado += ` ${milisegundos}ms`;
        }
    }

    return resultado;
}

module.exports = { format };
