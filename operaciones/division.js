function division(numeroA, numeroB) {
    if (numeroB === 0) {
      return "No es posible dividir por cero";
    } else {
      return numeroA / numeroB;
    }
  }
module.exports = {division}