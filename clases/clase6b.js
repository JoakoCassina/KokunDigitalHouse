//let pelis = ['Turno de dia', '30 noches con mi ex', 'Bestia', 'El monte', 'Top gun maverick', 'Elvis', 'Thor: amor y trueno'];
//let masVendida = pelis.pop();
//let mayuscula = masVendida.toUpperCase();
//pelis.unshift(mayuscula);

//let estrenos = ['Counter-Strike', 'NOP', 'Vertigo', 'Nick', 'Avatar'];
//let noVa = estrenos.shift();

//let cartelera = pelis.concat(estrenos);
//console.log(cartelera);

function tablaDeMultiplicar(numero) {
    //Escribí tu código aquí 
    let i = 1; //primero declarar la variable de incremento (a multiplicar)
    do {
        console.log(numero + ' * ' + i + ' = ' + (numero * i)); //mensaje a mostrar con operacion a resolver
        i++;
    }while(i <= 10); //repetir hasta que el incremento sea false.

}
console.log(tablaDeMultiplicar(5));