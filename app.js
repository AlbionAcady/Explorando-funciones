let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function botonClickado() {
    alert('El botón fue clicado');    
}

let nombreCiudadBrasil;
function interaccionTexto (){
    nombreCiudadBrasil = prompt('Ingrese una ciudad de Brasil:');
    alert (`Estuve en ${nombreCiudadBrasil} y me acordé de ti`);
}

function amoJs () {
    alert('Yo amo Java Script');
}

let numero1;
let numero2;
let resultadoS;
function sumaResultado() {
    numero1 = prompt("Ingresa el 1° número:");
    numero2 = prompt("Ingresa el 2° número:");
    resultadoS = parseFloat(numero1) + parseFloat(numero2);
    alert(`El resultado de tu suma es: ${resultadoS}`) 
}