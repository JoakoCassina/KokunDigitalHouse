// let pelis = require('./peliculas');
// console.log(pelis);

// let fs = require('fs');
// let mensaje = './mensaje.txt';

// let  leer = fs.readFileSync(mensaje, 'utf-8');
// console.log(leer);

let bicicletasImportadas = require('./datosBici');

let dhBici = {
    biciletas: bicicletasImportadas,
    buscarBici: function(buscarId) {
        const bicicletaADevolver = this.biciletas.find(bicicleta => {
            return bicicleta.id == buscarId;})
            if (!bicicletaADevolver) {
                return null;
            }
        return bicicletaADevolver;
    },
    venderBici: function(buscarId) {
        const buscarBici = this.buscarBici(buscarId);
        if (buscarBici) {
            buscarBici.vendida = true;
            return buscarBici;
        }
        return ('Bicicleta no encontrada')
    },
    biciParaLaVenta: function() {
        const biciletasSinVender = this.biciletas.filter(bicicleta => {
            return bicicleta.vendida == false; 
        })
        return biciletasSinVender
    },
    totalDeVentas: function() {
        const bicicletasVendidas = this.biciletas.filter(bicicleta => {
            return bicicleta.vendida == true;
        })
        const ventaTotal = bicicletasVendidas.reduce((total, valor) => {
            return total += valor.precio;
        }, 0)
        return ventaTotal;
    },
    aumentoBici: function (porcentaje) {
        let aumento = this.biciletas.map(bicicleta => {
            return (bicicleta.precio * porcentaje) / 100;
        })
        // const nuevoPrecio = aumento + bicicleta.precio;
        return aumento;
    },
    biciPorRodado: function (rodado) {
        const biciRodado = this.biciletas.filter(bicicleta => {
            return bicicleta.rodado == rodado;
        })
        return biciRodado
    },
    listadosDeBicis: function () {
        const bicisRegistradas = this.biciletas.map(bicicleta => {
            return bicicleta
        })
        return bicisRegistradas;
        
    }
}

console.log(dhBici.buscarBici(2));
console.log(dhBici.venderBici(5));
console.log(dhBici.biciParaLaVenta());
console.log(dhBici.totalDeVentas());
console.log(dhBici.aumentoBici(30));
console.log(dhBici.biciPorRodado(29));
console.log(dhBici.listadosDeBicis());