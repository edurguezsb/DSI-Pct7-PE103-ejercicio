//const prompt = require('prompt-sync')();
const { BibliotecaMusical } = require('./BibliotecaMusical');
const { Artista } = require('./Artista');
const { Discografia } = require('./Discografia');
const { Cancion } = require('./Cancion');

// Crear una instancia de BibliotecaMusical
const biblioteca = new BibliotecaMusical();

// Solicitar al usuario que ingrese la información del artista
const nombreArtista = prompt('Ingrese el nombre del artista: ');
const paisArtista = prompt('Ingrese el país del artista: ');
const artista = new Artista(nombreArtista, paisArtista);

// Solicitar al usuario que ingrese la información de la discografía
const nombreDiscografia = prompt('Ingrese el nombre de la discografía: ');
const anioDiscografia = prompt('Ingrese el año de la discografía: ');
const discografia = new Discografia(nombreDiscografia, anioDiscografia);

// Solicitar al usuario que ingrese la información de la canción
const nombreCancion = prompt('Ingrese el nombre de la canción: ');
const duracionCancion = prompt('Ingrese la duración de la canción en segundos: ');
const reproduccionesCancion = prompt('Ingrese el número de reproducciones de la canción: ');
const cancion = new Cancion(nombreCancion, duracionCancion, reproduccionesCancion);

// Agregar la canción a la discografía
discografia.agregarCancion(cancion);

// Agregar la discografía al artista
artista.agregarDisco(discografia);

// Agregar el artista a la biblioteca
biblioteca.agregarArtista(artista);

// Mostrar la información de la biblioteca en formato de tabla
console.table(biblioteca.getArtistas());

// Buscar artistas, discografías y canciones y mostrar los resultados en formato de tabla
const busquedaArtistas = biblioteca.buscarArtistas('artista');
console.table(busquedaArtistas);

const busquedaDiscografias = biblioteca.buscarDiscografias('discografia');
console.table(busquedaDiscografias);

const busquedaCanciones = biblioteca.buscarCanciones('cancion');
console.table(busquedaCanciones);

// Calcular el número de canciones de un disco
const nombreDisco = prompt('Ingrese el nombre del disco: ');
const numCanciones = biblioteca.numCancionesDisco(nombreDisco);
console.log(`El disco "${nombreDisco}" tiene ${numCanciones} canciones.`);

// Calcular la duración de un disco
const duracionDisco = biblioteca.duracionDisco(nombreDisco);
console.log(`La duración del disco "${nombreDisco}" es de ${duracionDisco} segundos.`);
