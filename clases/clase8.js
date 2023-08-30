/*
function sumatoriaBajoImporte(valores) {
    let sumatoria = 0;
    for (i = 0; i < valores.length; i++) {
        if (valores[i] <= 1000 && valores[i] > 0) {
             sumatoria += valores[i] 
        }
        
    }
    return sumatoria
    }
    console.log(sumatoriaBajoImporte([300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]));
   
    function asientosDisponibles(disponibles, lugar){
        if (disponibles.indexOf (lugar)< 0){
            return "lo sentimos, el asiento número " + lugar + " está ocupado, pero aún quedan " + disponibles.length + "asientos disponibles";
        }
        else {
            return "Felicitaciones, el asiento número " + lugar + " está disponible";
        }
    }
    
 console.log(asientosDisponibles([15, 28, 45, 70], 15));
    
 function reporteDePasajeros(estaciones) {
    let resultado = [];
    for (let i = 0; i < estaciones; i++) {
        let pasajeros;
        if (i >= 5) {
            pasajeros = 200 + i * 20 + 20 ;
        }else {
            pasajeros = 200 + i * 20;
        }
        resultado.push("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren");

    }
    return resultado
}
console.log(reporteDePasajeros(0));
console.log(reporteDePasajeros(3));
console.log(reporteDePasajeros(5));
console.log(reporteDePasajeros(7));

function invertirTexto (oracion) {
    const largo = oracion.length;
    let oracionInvertida = '';
    for (let i = largo - 1; i >= 0; i--) {
        oracionInvertida += oracion[i];
    }
    return oracionInvertida;
}
console.log(invertirTexto('Mi nombre es Joaquin'))

*/
function PrimeraPalabra(oración) {
    const largo = oración.length;
    let palabra = "";
    for (let i = 0; i < largo; i++) {
    const caracter = oración[i];
        if (caracter == " ") {
        return palabra;
        } 
        else {
    palabra += caracter;
        }
    }
    return palabra;
}
console.log(PrimeraPalabra('Mi nombre es Joaquin'));