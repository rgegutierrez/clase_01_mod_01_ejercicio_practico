// 1.- probando findIndex
function probandofindIndex (letra) {
    const alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");
    const posicion =  alfabeto.findIndex(x => x === letra) + 1;

    return `La letra: ${letra}, esta en la posicion ${posicion} del alfabeto`;
}

console.log(probandofindIndex('a'));
console.log(probandofindIndex('m'));
console.log(probandofindIndex('f'));


// 2.- probando Every
function probandoEvery (arrNumero) {
    const esPar = (num) => num % 2 === 0;

    return arrNumero.every(esPar);
}

// // salida esperada: false
// console.log(probandoEvery([2, 3, 4, 5, 6]));
// // salida esperada: true
// console.log(probandoEvery([2, 4, 6, 8, 10]));


// 3.- probando Some
function probandoSome (arrNumero) {
    const esImpar = (num) => num % 2 === 1;

    return arrNumero.some(esImpar);
}

// // salida esperada: true
// console.log(probandoSome([1, 2, 8, 73]));
// // salida esperada: false
// console.log(probandoSome([4, 8, 6, 22]));



// 4.- probando Filter
function probandoFilter (arrNumero) {
    const terminaEnON = n => n.endsWith('on');

    return arrNumero.filter(terminaEnON);
}

// // salida esperada: ['camion', 'salmon', 'estacion']
// console.log(probandoFilter(['camion', 'salmon', 'casa', 'estacion', 'hola']));



// 5.- probando Map
function probandoMap (arrString) {
    const completar = n => `${n}on`;

    return arrString.map(completar);
}

// // salida esperada: ['camion', 'salmon', 'estacion']
// console.log(probandoMap(['cami', 'salm', 'estaci']));


// 6.- probando Shift
function probandoShift (arrString) {
    const siguiente = arrString.shift();

    console.log(`${siguiente} es el siguiente. Quedan en la cola ${arrString}`)

    return arrString.length > 0 ? probandoShift(arrString) : 'No queda nadie en la cola';
}

// console.log(probandoShift(['Juan', 'Pedro', 'Guillermo', 'Gabriel']));
