let operacion = 'sumar';
let numero1 = 2;
let numero2 =2;



switch(operacion){
    case 'sumar':
        resultado = numero1 + numero2;
    console.log('el resultado de sumar', numero1, '+', numero2, 'es', resultado);
    break;
    case 'restar':
        resultado = numero1 - numero2;
    console.log('el resultado de restar', numero1, '-', numero2, 'es', resultado);
    break;
    case 'multiplicar':
        resultado = numero1 * numero2;
    console.log('el resultado de multiplicar', numero1, '*', numero2, 'es', resultado);
    break;
    case 'dividir':
        resultado = numero1 / numero2;
    console.log('el resultado de dividir', numero1, '/', numero2, 'es', resultado);
    break;
    default:
        console.log('Las operaciones aceptadas son: sumar- restar- multiplicar- dividir');
    
}