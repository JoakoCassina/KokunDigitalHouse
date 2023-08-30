let operaciones = [5500, -2000, 600, -900];

function saldo(operaciones) {
    let deposito = 0;
    let retiro = 0;
    
    for (let i = 0; i < operaciones.length; i++) {
        
        operaciones[i] > 0? deposito += operaciones[i]: retiro -= operaciones[i];
    }

    let resultado = deposito - retiro;

    return 'Depositos: '+deposito+ ' Retiros: '+retiro+ ' Saldo Total: '+resultado
}

function mensaje(nombre, apellido,operaciones, cb){
    console.log("Estimad@ " + nombre + " " + apellido + ":\n" + cb(operaciones));
}
console.log(mensaje("pepe","pasto",operaciones,saldo)); 

/*function tabla() {
    console.log("TABLA DE MULTIPLICAR\n\n");
    console.log("---------------------------");

    for(let i = 1; i <=10; i++){
        for(let j = 1; j<=10; j++){
            console.log(i + " * " + j + " = " + i*j);
        }
    }
    console.log("---------------------------");
}
console.log(tabla()); */

