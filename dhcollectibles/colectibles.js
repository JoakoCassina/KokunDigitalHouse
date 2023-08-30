let fs = require('fs');

function importar(marcas) {
    let figurasFile = '';
    let figuras = '';
    if (marcas == 'Hot Toys') {
        figurasFile = fs.readFileSync('./dhcollectibles/datos/figuras1.json', 'utf-8');


    } else if (marcas == 'Bandai') {
        figurasFile = fs.readFileSync('./dhcollectibles/datos/figuras2.json', 'utf-8');

    }
    else if (marcas == 'Star Wars') {
        figurasFile = fs.readFileSync('./dhcollectibles/datos/figuras3.json', 'utf-8');

    } else {
        return []; 
    }
    figuras = JSON.parse(figurasFile);
    return figuras;
}

// console.log(importar('Hot Toys'));

module.exports = importar; 