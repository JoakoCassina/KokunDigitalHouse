let arrayNumeros = [2, 6, 11, 17, 21, 28, 32, 37, 42, 50];
let [valor0, , valor2, , valor4, ...resto] = arrayNumeros;
const nuevosNumeros = [valor0, valor2, valor4];
const arrayResto = [resto];

// console.log(nuevosNumeros);
// console.log(resto);

let mascota = {
    nombre: 'Limon',
    tipo: 'Perro',
    color: 'Amarillo',
    raza: 'mestizo'
}
let {nombre, tipo, color, raza} = mascota;

console.log('Hola, les presento a mi mascota su nombre es: ' +nombre+ ', es un hermoso ' +tipo+ ', de color: '+color+ ' y su raza es: '+raza+'.');