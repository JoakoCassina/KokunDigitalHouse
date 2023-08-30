const autosImportados = require('./moduloFinal');

const concesionara =  {
    autos: autosImportados,
    buscarAuto: function(patente) {
        const auto = this.autos.find((auto) => {   //forma corta this.autos.find((auto) => auto.patente === patente;)
           return auto.patente === patente;
        });
        if (auto === undefined) {
           return null;
        }
        return auto;
     },
     venderAuto: function(patente) {
        const auto = this.buscarAuto(patente);
        if (auto !== null) {
              auto.vendido = true;
          }
     },
     autosParaLaVenta: function() {
        const autos = this.autos.filter(auto => {  // forma corta return this.autos.filter(auto => auto.vendido === false);
            auto.vendido === false;
            return autos;
     });
     },
     autosNuevos: function (){
        const autos = this.autosParaLaVenta();
        return autos.filter((auto) => auto.km < 100);
     },
  
     listaDeVentas: function () {
        const autos = this.autos.filter(autos => autos.vendido === true);
        return autos.map((auto) => auto.precio)
  
     }
  
  };

    
