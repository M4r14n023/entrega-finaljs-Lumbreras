Swal.fire({
  title: 'En este sitio vas a poder agregar las series y pelis que mas te gusten y calcular el tiempo total que te va a llevar verlas todas, ademas vas a poder consultar por las mas nuevas y populares para agregarlas a tu lista! A disfrutar...',
  width: 600,
  padding: '3em',
  color: '#716add',
  background: '#fff url(/images/trees.png)',
  backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `
})

// Obtener elementos HTML
const moviesForm = document.querySelector("#movies-section form");
const seriesForm = document.querySelector("#series-section form");
const totalTimeSection = document.querySelector("#total-time");

// Variables
let totalTime = 0;

// Obtenemos el formulario y los campos de entrada
const formulario = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");
const tipoSelect = document.getElementById("tipo");
const duracionInputP = document.getElementById("duracionPeli");
const cantidadTemporadasInput = document.getElementById("cantidadTemporadas");
const cantidadEpisodiosInput = document.getElementById("cantidadEpisodios");
const duracionInput = document.getElementById("duracion");
const datosSerieDiv = document.getElementById("datosSerie");
const labelDurPeli = document.getElementById("duracionPeliLabel")

// Agregamos un evento al selector de tipo para mostrar o ocultar los campos de datos de serie

let duracionPelis = 0

tipoSelect.addEventListener("change", () => {
  if (tipoSelect.value === "Serie") {
    datosSerieDiv.style.display = "block";
    duracionInputP.style.display = "none";
    duracionInputP.value = duracionPelis;
    labelDurPeli.style.display ="none"
  } else {
    datosSerieDiv.style.display = "none";
    duracionInputP.style.display = "block";
  }
});

// Función para agregar un item a la lista
function agregarItem(nombre, tipo, duracionPeliculas, cantidadTemporadas, cantidadEpisodios, duracion) {

  const item = {
    nombre: nombre,
    tipo: tipo,
    duracionPeliculas: duracionPeliculas,
    cantidadTemporadas: cantidadTemporadas,
    cantidadEpisodios: cantidadEpisodios,
    duracion: duracion
  };
  
  if (nombre == "" || tipo == "" || duracionPeliculas == "") {
    Swal.fire({
      icon: 'info',
      title: 'Completa todos los campos para agregar la '+tipo,
      text: 'Deberas volver a cargar todos los datos',
    });
    return false;
  }
  
  if (tipo == "Serie" && (cantidadTemporadas == "" || cantidadEpisodios == "" || duracion == "")) {
    Swal.fire({
      icon: 'info',
      title: 'Completa todos los campos para agregar la '+tipo,
      text: 'Deberas volver a cargar todos los datos',
    });
    return false;
  }
  
  let items = JSON.parse(localStorage.getItem("items")) || [];
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));

  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Tu '+tipo+' fue cargada con exito',
    showConfirmButton: false,
    timer: 1500
  });
  
  mostrarLista();}
  


// Función para mostrar los items de la lista
function mostrarLista() {
    const lista = document.getElementById("listaItems");
    lista.innerHTML = "";
    
    let items = JSON.parse(localStorage.getItem("items")) || [];
    let duracionTotalSeries = 0;
    let duracionTotalPelis = 0;
    items.forEach((item) => {
      let entradaLista = document.createElement("li");
      if (item.tipo === "Película") {
        entradaLista.textContent = `${item.tipo}: ${item.nombre} - Duración: ${item.duracionPeliculas} minutos`;
        duracionTotalPelis += item.duracionPeliculas*1;
      } else {
        entradaLista.textContent = `${item.tipo}: ${item.nombre} - Temporadas: ${item.cantidadTemporadas} - Episodios por temporada: ${item.cantidadEpisodios} - Duración promedio por episodio: ${item.duracion} minutos`;
        duracionTotalSeries += item.duracion * item.cantidadTemporadas * item.cantidadEpisodios;
      }
      lista.appendChild(entradaLista);
    });
document.getElementById("duracionSeries").textContent = `Duración total de las Series: ${duracionTotalSeries} minutos`;
document.getElementById("duracionPeliculas").textContent = `Duración total de las películas: ${duracionTotalPelis} minutos`;
  }


// Agregamos un evento al formulario para capturar el envío de datos
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = nombreInput.value;
  const tipo = tipoSelect.value;
  const duracionPeliculas = duracionInputP.value;
  const cantidadTemporadas = cantidadTemporadasInput.value;
  const cantidadEpisodios = cantidadEpisodiosInput.value;
  const duracion = duracionInput.value;

  agregarItem(nombre, tipo, duracionPeliculas, cantidadTemporadas, cantidadEpisodios, duracion);
  formulario.reset();
});

// Mostramos la lista al cargar la página
mostrarLista();

/*** EJEMPLO DE DARK MODE ***/

const botonColorMode = document.querySelector("#color-mode");
const body = document.body;

let darkMode = localStorage.getItem("dark-mode");

function activarDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado");
}

function desactivarDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado");
}

if (darkMode === "activado") {
    activarDarkMode();
} else {
    desactivarDarkMode();
}

botonColorMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");

    if (darkMode === "activado") {
        desactivarDarkMode();
    } else {
        activarDarkMode();
    }
})




