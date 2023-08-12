// Obtengo el div por su id
const divSaludo = document.getElementById('divSaludo');

// Obtengo el boton por su id
const botSaludo = document.getElementById("botSaludo");

// Defino la función que se ejecutará al hacer clic en el div
function saludarDiv() {
  alert('Hola! Soy el div');
}

//Defino la funcion que se ejecutara al hacer click en el boton
function saludarBot() {
  alert('Hola!');
}

// Asocio el manejador de eventos al hacer clic en el boton
botSaludo.addEventListener(click, saludarBot);

// Asocio el manejador de eventos al hacer clic en el div
divSaludo.addEventListener('click', saludarDiv);

// Detengo la propagación del evento click del div al botón, ya no aparece "Hola, soy el div"
divSaludo.addEventListener('click', function(event) {
  event.stopPropagation();
});
