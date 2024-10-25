/**
 *
 * @param {number} ms - Milisegundos
 * @param {object} op - Opciones (leer los types)
 * @returns {string} - La duración formateada
 */

function format(ms, op) {
  if (typeof ms !== "number") {
    throw new TypeError("Se esperaba un número");
  }
  let milisegundosSinFormato = ms % 1000;
  const milisegundos =
    milisegundosSinFormato.toString().length == 1
      ? `0${milisegundosSinFormato}`
      : milisegundosSinFormato;
  let segundosSinFormato = Math.floor((ms / 1000) % 60);
  let segundos =
    segundosSinFormato.toString().length == 1
      ? `0${segundosSinFormato}`
      : segundosSinFormato;
  let minutosSinFormato = Math.floor((ms / (1000 * 60)) % 60);
  let minutos =
    minutosSinFormato.toString().length == 1
      ? `0${minutosSinFormato}`
      : minutosSinFormato;
  let horasSinFormato = Math.floor((ms / (1000 * 60 * 60)) % 24);
  let horas =
    horasSinFormato.toString().length == 1
      ? `0${horasSinFormato}`
      : horasSinFormato;
  let diasSinFormato = Math.floor(ms / (1000 * 60 * 60 * 24));
  let dias =
    diasSinFormato.toString().length == 1
      ? `0${diasSinFormato}`
      : diasSinFormato;

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
    resultado = `00:00`;
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
      resultado = `0s`;
    }

    if (withMs) {
      resultado += ` ${milisegundos}ms`;
    }
  }

  return resultado;
}

module.exports = { format };
