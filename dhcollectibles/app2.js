let figuritas = require('./colectibles');
let hotToys = figuritas('Hot Toys');
let bandai = figuritas('Bandai');
let starWars = figuritas('Star Wars')
// console.log(hotToys);
// console.log(bandai);
// console.log(starWars);

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars]; // unir los tres array en uno solo 
// console.log(unifiedCollectibles);
let collectibles = {
    figuras: unifiedCollectibles,
    listFigures: function() {
        const figuritas = this.figuras.forEach(lista => {
            console.log(lista);
        });
    },
    figuresByBrand: function(marca) {
        const marcaDeFiguras = this.figuras.filter(figura => figura.marca == marca);
        return marcaDeFiguras;
    }

}
// console.log(collectibles.listFigures());
// console.log(collectibles.figuresByBrand('Hot Toys'));
// console.log(collectibles.figuresByBrand('Bandai'));
// console.log(collectibles.figuresByBrand('Star Wars'));