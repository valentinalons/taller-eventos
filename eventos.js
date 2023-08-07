// Obtenemos el div por su id
const divSaludo = document.getElementById('divSaludo');

// Definimos la función que se ejecutará al hacer clic en el div
function saludarDiv() {
  alert('Hola! Soy el div');
}

// Asociamos el manejador de eventos al hacer clic en el div
divSaludo.addEventListener('click', saludarDiv);