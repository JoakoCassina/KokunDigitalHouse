
let fs = require('fs');
let bicicletasFile = fs.readFileSync('./bicicleta.json', 'utf-8'); 
let arrayBici = JSON.parse(bicicletasFile);




module.exports = arrayBici;