const fs = require('fs');
const suma = require('./operaciones/suma');
const resta = require('./operaciones/resta');
const multiplicacion = require('./operaciones/multiplicacion');
const division = require('./operaciones/division');
const potencia = require('./operaciones/potencia');
const {argv} = process

let operacion = argv[2]
let numeroA = argv[3];
let numeroB = argv[4];
let resultado;

switch (operacion) {
    case 'suma': 
        resultado = suma(numeroA, numeroB)
        break;
    case 'resta': 
        resultado = resta(numeroA, numeroB)
        break;
    case 'multiplicacion':
        resultado = multiplicacion(numeroA, numeroB)
        break;
    case 'division':
        resultado = division(numeroA, numeroB)
        break;
        case 'potencia':
        resultado = potencia(numeroA, numeroB)
        break;
    default :
        resultado = 'No se encuentra la operacion solicitada'
        break;
};


