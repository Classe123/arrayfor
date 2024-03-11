let miavariabile = 'stringa';
let numero =  23;
let mybool = true;

//undefined
//null

//nuovo tipo Array
let classe123 = [
    'Nicola Filaninno',
    'Matteo Ruffa',
    'Federica Gallo',
    'Eldin Balje',
    'Sasha Politi'
];

let numeri = [[2,6,8], 10, 9]; 

console.log(classe123);
console.log(classe123.length);
//console.log(classe123[0]);

//console.log(numeri[0][1]);
// let primoElemento = classe123[0];
// let UltimoElemento = classe123[lunghezza - 1];
// let lunghezza = classe123.push('Angelo Ciulla');

// console.log(lunghezza);

//inserisco un elemento nell'array in coda
classe123.push('Angelo Ciulla');

//inserisco un elemento nell'array in cima
classe123.unshift('Andrea Sgura');
console.log(classe123);

//elimina l'ultimo elemento dell'array
classe123.pop();

// let exultimo =classe123.pop();
// console.log(exultimo);

//elimina il primo elemento dell'array
classe123.shift();

console.log(classe123);
// ciclo for su classe123
// for(let i = 0; i < classe123.length; i++){
//     let allievo = classe123[i];
//     console.log(allievo);
// }