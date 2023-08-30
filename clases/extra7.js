/*
function siguiente(numero){
    let contador = numero + 1;
    while (contador <= numero+10) {
        console.log(contador);
        contador++;
    }
}

function siguientes10(numero){
    let cont=numero+1
    do{
        console.log(cont)
        cont++
    }while(cont<=(numero+10))
}


function impx3() {
    for(let i = 1; i<= 57; i+=3){
        console.log(i);
    }
}
impx3()


function sumatoria() {
    let numero = 0;
    for (let index = 1; index <= 100 ; index++) {
        numero += index ;
    }
    return numero;

}
console.log(sumatoria());

function mayuscula (cadena) {
cadena = cadena.toUpperCase();
console.log(cadena);
}
console.log (mayuscula('practicando el uso de los ciclos o bucles'));
*/
function arrayPositivos(valores) {
    arrayPositivos = [];
    for (let i = 0; i < valores.length; i++) {

        if (valores[i] % 2 === 0) {
            console.log(valores[i]); 
        }
    }
}
console.log(arrayPositivos ([15, 25, 30, 40]));