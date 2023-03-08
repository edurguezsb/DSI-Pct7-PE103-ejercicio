import * as Prompt from 'prompt-sync';
const prompt = Prompt();
import { BibliotecaMusical } from './BibliotecaMusical';
import { Artista } from './Artista';
import { Disco } from './Discografia';
import { Cancion } from './Cancion';

// Crear una instancia de BibliotecaMusical
const biblioteca = new BibliotecaMusical();

// Solicitar al usuario que ingrese la información de la canción
const nombreCancion = prompt('Ingrese el nombre de la canción: ');
const duracionCancion = Number (prompt('Ingrese la duración de la canción en segundos: '));
const reproduccionesCancion = Number (prompt('Ingrese el número de reproducciones de la canción: '));
const genero = prompt('Ingrese el genero de la canción: ');
const generos:string[] = [genero];
const SingleSiONo = Boolean (prompt('¿Es un signle? true o false: '));
const cancion = new Cancion(nombreCancion, duracionCancion, generos, SingleSiONo, reproduccionesCancion);
const canciones:Cancion[] = [cancion];

// Solicitar al usuario que ingrese la información del artista
const nombreArtista = prompt('Ingrese el nombre del artista: ');
const oyentesMensuales = Number(prompt('Ingrese el número de oyentes mensuales: '));

// Solicitar al usuario que ingrese la información de la discografía
const nombreDiscografia = prompt('Ingrese el nombre del disco: ');
const anioDiscografia = Number(prompt('Ingrese el año del disco: '));
const disco = new Disco(nombreDiscografia, anioDiscografia, canciones);
const discografia:Disco[] = [disco];
const artista = new Artista(nombreArtista, oyentesMensuales, discografia);

// Agregar la canción a la discografía
discografia[0].agregarCancion(cancion);

// Agregar la discografía al artista
//artista.agregarDisco(disco);

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
