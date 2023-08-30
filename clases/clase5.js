/*
function alquiler(tipoVehiculo, dias, sillaBebe) {
    let total = 0;
    switch (tipoVehiculo) {
        case 'Compacto':
            total = 14000 * dias;
            break;
        case 'Mediano':
                total = 17000 * dias;
                break;
        case 'Camioneta':
            total = 28000 * dias;
            break;
        default:
            return `El tipo ${tipoVehiculo} es incorrecto, debe ser Compacto, Mediano o Camioneta`;
    }

    let mensaje = `Estimado cliente: con base en el tipo de vehículo ${tipoVehiculo} alquilado, considerando los ${dias} días utilizados`;

    if (sillaBebe) {
        mensaje += ', Ademas pediste una silla para bebe';
        total += 1200 * dias;
    }

    mensaje += `. el monto total a pagar es de: $${total}`;

    return mensaje;
}

console.log(alquiler('Mediano', 10, true));
console.log(alquiler('Camioneta', 10, true));
console.log(alquiler('Compacto', 10, false));
console.log(alquiler('Camion', 10, true));
*/

function hamburguesa(tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let totalHamburguesa = 0;
    switch (tipoDeHamburguesa) {
        case 'carne a la parrilla':
            totalHamburguesa += 1800;
            break;
        case 'pollo':
            totalHamburguesa += 1500;
            break;
        case 'vegetariana':
            totalHamburguesa += 1200;
            break;
        default:
            return 'el tipo de hamburguesa es incorrecto, las variedades disponibles son Carne a la parrilla, Pollo, Vegetariana'
    }

    if (jamon == true){
        totalHamburguesa += 30;
    }
    if (queso == true){
        totalHamburguesa += 25;
    }
    if (salsaDeTomate == true){
        totalHamburguesa += 5;
    }
    if (mayonesa == true){
        totalHamburguesa += 5;
    }
    if (mostaza == true){
        totalHamburguesa += 5;
    }
    if (tomate == true){
        totalHamburguesa += 15;
    }
    if (lechuga == true){
        totalHamburguesa += 10;
    }
    if (cebolla == true){
        totalHamburguesa += 10;
    }
    return totalHamburguesa;
} 
let consumidorFinal = (nombre, apellido, tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla,callback) => {
    return 'Estimado ', nombre, ' ', apellido, 'el monto total a pagar de su hamburguesa es de $', callback(tipoDeHamburguesa, jamon, queso, salsaDeTomate, mayonesa, mostaza, tomate, lechuga, cebolla);
}

console.log(consumidorFinal('Joaquin', 'Cassina', 'carne a la parrilla', true, true, true, false, false, false, false, true,hamburguesa));