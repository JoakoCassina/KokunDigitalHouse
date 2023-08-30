// let graduadosdeHTML5 = '30 45 25 34 18 23 16 50 72 70';
// let graduadosdeCSS3 = '50 45 71 34 23 45 65 75 63 43 74 70';
// let graduadosdeJAVASCRIPT = '70 65 58 45 23 57 34 17 72';
// let graduadosdeNODEJS = '45 56 73 34 65 72 70 32';

// function lista(valor) {
//     let graduados = valor.split(' ');
//     return graduados;

// }

// // console.log(array(graduadosdeHTML5));
// // console.log(array(graduadosdeCSS3));
// // console.log(array(graduadosdeJAVASCRIPT));
// // console.log(array(graduadosdeNODEJS));

// function calcularPromedio(numero, html, css, js, node) {

//     let promedioaCalcular = null;
//     let suma = 0;
//     let promedioTotal = 0;
//     switch (numero) {

//         case 1:

//             promedioaCalcular = html.split(' ');
//             break;
//         case 2:
//             promedioaCalcular = css.split(' ');
//             break;
//         case 3:
//             promedioaCalcular = js.split(' ');
//             break;

//         case 4:
//             promedioaCalcular = node.split(' ');
//             break
//         default:
//             return 'elige un valor entre el 1 y el 4';

//     }

//     for (let index = 0; index < promedioaCalcular.length; index++) {
//         suma +=Number(promedioaCalcular[index]) ;


//     }
//     promedioTotal = suma / promedioaCalcular.length;
//     return promedioTotal;         
// }
// console.log(calcularPromedio(1,graduadosdeHTML5, graduadosdeCSS3,graduadosdeJAVASCRIPT,graduadosdeNODEJS));

// function encontrarNumero (array,numero) {
//     if (array.indexOf (numero)<0) {
//         return 'el valor ' +numero+ ' no existe';
//     }
//     else {
//         return 'El número ' +numero+ ' si existe en el array';}
// }

// console.log(encontrarNumero([12, 22, 30], 10));


// function juegoDeTrompito(trompito, vueltas) {
// let trompito = ['Toma 1', 'Toma 2',
//     'Pon 1', 'Pon 2', 'Todos ponen', 'Toma todo'];
// let vueltas = Math.floor(Math.random() * 6);
// console.log(trompito[vueltas]);

// let numero = [2, 4, 5, 7, 10, 23, 11, 20, 8, 1];
// function sumatoria(numero) {
//     let sumaPar = 0;
//     let sumaInpar = 0;
//     for (let i = 0; i < numero.length; i++) {
//         let valor = numero[i];
//         if (valor % 2 === 0) {
//             sumaPar += valor;
//         }
//         else if (valor%2 !== 0) {
//             sumaInpar += valor;
//         }
//     }
//     return [sumaPar, sumaInpar]
// }
// console.log(sumatoria([2, 4, 5, 7, 10, 23, 11, 20, 8, 1]));

let numero = [2, 4, 5, 7, 10, 23, 11, 20, 8, 1];
function sumatoria(numero) {
    let sumaPar = 0;
    let sumaInpar = 0;
    for (let i = 0; i < numero.length; i++) {
        numero[i] % 2 === 0? sumaPar += numero[i]: sumaInpar += numero[i];
    }
    return 'La sumatoria de los numeros Pares es = ' +sumaPar+ ' La sumatoria de los numeros Impares es = ' +sumaInpar
}
console.log(sumatoria([2, 4, 5, 7, 10, 23, 11, 20, 8, 1]));