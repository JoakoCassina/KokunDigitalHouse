let velocidad = 375;
let altura = 190;

if ((velocidad >= 268 && velocidad <= 278) && (altura >= 150 && altura <= 300)) {
    console.log('el avion esta listo para iniciar el aterrizaje');

}
else if ((velocidad >= 268 && velocidad <= 278) && (altura > 301 || altura < 149)) {
    console.log('para poder inicar el aterrizaje, debes volar a la altura recomendada entre 150m y 300m');

}
else if ((velocidad > 279 || velocidad <267) && (altura >= 150 && altura <= 300)) {
    console.log('para poder inicar el aterrizaje, debes volar a la velocidad recomendada entre  268 a 278km/hr');

}
else if ((velocidad > 279 || velocidad <267) && (altura > 301 || altura < 149)) {
    console.log('para poder inicar el aterrizaje, debes volar a los valores recomendados');

}