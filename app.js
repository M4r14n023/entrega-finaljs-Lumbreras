// Obtener elementos del DOM
const loginForm = document.querySelector("#login-form form");
const registerForm = document.querySelector("#register-form form");
const welcomeMessage = document.querySelector("h1");

// Manejar eventos de formulario de inicio de sesión
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const password = event.target.password.value;
  const storedUser = localStorage.getItem(username);
  if (storedUser !== null && JSON.parse(storedUser).password === password) {
    welcomeMessage.textContent = "Bienvenido " + username;
  } else {
    alert("Nombre de usuario o contraseña incorrectos.");
  }
});

// Manejar eventos de formulario de registro
registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newUsername = event.target["new-username"].value;
  const newPassword = event.target["new-password"].value;
  const newUser = { password: newPassword };
  if (localStorage.getItem(newUsername) !== null) {
    alert("El nombre de usuario ya está en uso. Por favor, elija otro.");
  } else {
    localStorage.setItem(newUsername, JSON.stringify(newUser));
    alert("Usuario registrado con éxito. Por favor, inicie sesión.");
  }
});

// Obtener elementos HTML
// const loginForm = document.querySelector("#login-form");
// const registerForm = document.querySelector("#register-form");
const moviesForm = document.querySelector("#movies-section form");
const seriesForm = document.querySelector("#series-section form");
const totalTimeSection = document.querySelector("#total-time");

// Variables
let totalTime = 0;

// Eventos
loginForm.addEventListener("submit", login);
registerForm.addEventListener("submit", register);

// Funciones
function login(event) {
  event.preventDefault();
  // Obtener credenciales de localStorage y verificar si son correctas
  // Actualizar mensaje de bienvenida con el nombre del usuario si es correcto
}

function register(event) {
  event.preventDefault();
  const newUsername = document.querySelector("#new-username").value;
  const newPassword = document.querySelector("#new-password").value;
  // Verificar si el nombre de usuario ya está en uso
  // Si no lo está, almacenar credenciales en localStorage
}

// Obtenemos el formulario y los campos de entrada
const formulario = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");
const tipoSelect = document.getElementById("tipo");
const duracionInputP = document.getElementById("duracionPeli");
const cantidadTemporadasInput = document.getElementById("cantidadTemporadas");
const cantidadEpisodiosInput = document.getElementById("cantidadEpisodios");
const duracionInput = document.getElementById("duracion");
const datosSerieDiv = document.getElementById("datosSerie");

// Agregamos un evento al selector de tipo para mostrar o ocultar los campos de datos de serie
tipoSelect.addEventListener("change", () => {
  if (tipoSelect.value === "Serie") {
    datosSerieDiv.style.display = "block";
  } else {
    datosSerieDiv.style.display = "none";
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
  
  let items = JSON.parse(localStorage.getItem("items")) || [];
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
  
  mostrarLista();
}

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
// alert(`La duración total de las series es de ${duracionTotalSeries} minutos.`);
document.getElementById("duracionSeries").textContent = `Duración total de las Series: ${duracionTotalSeries} minutos`;
// alert(`La duración total de las películas es de ${duracionTotalPelis} minutos.`);
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