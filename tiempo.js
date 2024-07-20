
const temperatura = document.getElementById('temperatura');
const city = document.getElementById('city');
const text = document.getElementById('text');
const btn = document.getElementById('buscar');
const clear = document.getElementById('clear'); 

// Función para mostrar el mensaje de error usando SweetAlert
function error() {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "Error no insertado un Texto",
    timer: 2000 
  });
}

// Función para llamar (mostrar el error)
function llamar() {
  error();
}

// Función para evaluar y obtener el clima de la ciudad
function evaluar(cityName) {
  const apiKey = 'cebcd482eda57fa9a6714c1c2ba91885';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(resultado => resultado.json())
    .then(motral => motralResultado(motral))
    .catch(erro => {
      console.log(erro);
      llamar(); // Llamar la función llamar en caso de error
    });
}

// Función para mostrar el resultado del clima
function motralResultado(motral) {
  city.textContent = motral.name;
  temperatura.textContent = Math.round(motral.main.temp);
}

// Evento click en el botón buscar
btn.addEventListener('click', (e) => {
  e.preventDefault();
  evaluar(text.value);
});

// remover lo texto input y del body OJO




