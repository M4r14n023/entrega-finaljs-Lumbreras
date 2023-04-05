let nombre = prompt("Por favor, ingresa tu nombre:");

function Pelicula(titulo, duracion) {
  this.titulo = titulo;
  this.duracion = duracion;
}

function Serie(nombre, temporadas, duracionTotal) {
  this.nombre = nombre;
  this.temporadas = temporadas;
  this.duracionTotal = duracionTotal;
}

let peliculas = [];
let series = [];
let totalDuracion = 0;
let totalDuracionSeries = 0;

function agregarPelicula(titulo, duracion) {
  peliculas.push(new Pelicula(titulo, duracion));
  totalDuracion += duracion;
}

function agregarSerie(nombre, temporadas, duracionTotal) {
  series.push(new Serie(nombre, temporadas, duracionTotal));
  totalDuracionSeries += duracionTotal;
}

let continuar = true;
while (continuar) {
  let opcion = Number(prompt("¿Qué quieres agregar?\n1. Película\n2. Serie"));

  if (opcion === 1) {
    let titulo = prompt("Ingresa el título de la película:");
    let duracion = Number(prompt("Ingresa la duración de la película en minutos:"));

    agregarPelicula(titulo, duracion);
  } else if (opcion === 2) {
    let nombre = prompt("Ingresa el nombre de la serie:");
    let temporadas = Number(prompt("Ingresa la cantidad de temporadas de la serie:"));
    let duracionTotal = Number(prompt("Ingresa la duración total de la serie en minutos:"));

    agregarSerie(nombre, temporadas, duracionTotal);
  }

  let respuesta = prompt("¿Quieres agregar otro contenido? (s/n)");
  if (respuesta.toLowerCase() !== "s") {
    continuar = false;
  }
}


// Verificar si el usuario agregó algún contenido
if (peliculas.length === 0 && series.length === 0) {
    alert("No has agregado contenido.");
  } else {


// Imprimir las películas y su duración
alert(`Hola ${nombre}, tus películas y su duración son:`);
for (let i = 0; i < peliculas.length; i++) {
  alert(`${peliculas[i].titulo}: ${peliculas[i].duracion} minutos`);
}
alert(`El total de duración de tus películas es de ${totalDuracion} minutos.`);

// Imprimir las series y su duración total
alert(`Tus series y su duración total son:`);
for (let i = 0; i < series.length; i++) {
  alert(`${series[i].nombre} - ${series[i].temporadas} temporadas: ${series[i].duracionTotal} minutos`);
}
alert(`El total de duración de tus series es de ${totalDuracionSeries} minutos.`);
// Construir la lista final
let lista = `Hola ${nombre}, tus películas y series agregadas son:\n\n`;
if (peliculas.length > 0) {
  lista += `Películas:\n`;
  for (let i = 0; i < peliculas.length; i++) {
    lista += `${peliculas[i].titulo}: ${peliculas[i].duracion} minutos\n`;
  }
}
if (series.length > 0) {
  lista += `\nSeries:\n`;
  for (let i = 0; i < series.length; i++) {
    lista += `${series[i].nombre} - ${series[i].temporadas} temporadas: ${series[i].duracionTotal} minutos\n`;
  }
}
    // Mostrar la lista final en una alerta
    alert(lista);

  // Imprimir la duración total de todo el contenido
  let duracionTotal = totalDuracion + totalDuracionSeries;
  alert(`La duración total de todo tu contenido es de ${duracionTotal} minutos.`);
}
