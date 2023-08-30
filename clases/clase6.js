let electros = ['lavarropas', 'horno', 'cocina', 'heladera', 'licuadora', 'microondas'];
electros.push(electros.shift());
electros.push('batidora', 'mixer');

//console.log(electros.length);


//condicion para saber si existe el producto.
//if (electros.indexOf('lavarropas') !== -1) {
//    console.log('producto encontrado');
//}
//else {
//    console.log('el producto no existe');
//}
//console.log(electros.join(' ')); 
//console.log(electros.join(' ').length); 
//console.log(frase.replace('heladera', 'lavavajilla'));  // remplazamos heladera por lavavajilla

let frase = (electros.join(' ')); //guardamos la frase
console.log(frase.split(' '));