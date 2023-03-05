# Práctica 5

En esta actividad, la Práctica 5 de la asignatura, se nos plantean varios problemas de programación que nos ayudarán a conocer más en profundidad objetos, clases e interfaces en TypeScript.
A continuación se mostrarán las soluciones para los problemas mencionados anteriormente, acompañados de explicaciones, pruebas y comentarios que faciliten su comprensión.

Los objetivos de esta práctica son familiarizarnos con el manejo de objetos, clases e interfaces ya que son componentes fundamentales y que serán necesarios para el correcto desarrollo y avance en la asignatura de Desarrollo de Sistemas Informáticos, juntos con lo ya trabjado en prácticas anteriores, y lo que iremos viendo en las próximas semanas.


## _Ejercicio 1 - Biblioteca musical_

### Enunciado:

Diseñe el conjunto de clases e interfaces necesarias para almacenar una biblioteca musical. El desarrollo realizado debe cumplir los siguientes requisitos funcionales:

La información de un artista, ya sea un grupo o un solista, será la siguiente:
-Nombre
-Número de oyentes mensuales
-Discografía
La discografía de un artista consistirá en una colección de discos, donde la información de un disco será:
-Nombre
-Año de publicación
-Canciones
Por cada canción perteneciente a un disco, la información será la siguiente:
-Nombre
-Duración en segundos
-Géneros
-Single (determina si la canción fue lanzada como un single o no)
-Número de reproducciones
La biblioteca musical deberá permitir:
-Almacenar la información de diferentes artistas, su discografía y las canciones pertenecientes a cada disco o álbum.
-Mostrar por la consola la información de la biblioteca en formato tabla (console.table).
-Permitir llevar a cabo búsquedas de artistas, discos y canciones y mostrar los resultados de la búsqueda en formato de tabla.
-Permitir calcular el número de canciones incluidas en un disco concreto.
-Permitir calcular la duración de un disco, a partir de la duración de todas y cada una de las canciones que lo conforman.
-Permitir calcular el número de reproducciones de un disco, a partir del número de reproducciones de todas y cada una de las canciones incluidas en el mismo.

#### Código

Nuestro programa se divide en 5 ficheros, Artista.ts, BibliotecaMusical.ts, Cancion.ts, Discografia.ts y Prueba.ts. A continuación explico cada uno:

- Canción.ts:

``` TypeScript
/**
 * Clase que representa una canción
 */
export class Cancion {
    nombre: string;
    duracionSegundos: number;
    generos: string[];
    esSingle: boolean;
    numReproducciones: number;

 /**
* Crea una instancia de Cancion con los valores que le ponemos.
* Constructor de la clase Cancion
* @param nombre El nombre de la canción.
* @param duracionSegundos La duración de la canción en segundos.
* @param generos Los géneros musicales de la canción.
* @param esSingle Indica si la canción es un single o no.
* @param numReproducciones El número de reproducciones de la canción.
* @throws Error si la duración o el número de reproducciones son negativos.
*/
    constructor(nombre: string, duracionSegundos: number, generos: string[], esSingle: boolean, numReproducciones: number) {
      if (duracionSegundos < 0) {
        throw new Error('La duración de la canción no puede ser negativa');
      }
  
      if (numReproducciones < 0) {
        throw new Error('El número de reproducciones de la canción no puede ser negativo');
      }
      this.nombre = nombre;
      this.duracionSegundos = duracionSegundos;
      this.generos = generos;
      this.esSingle = esSingle;
      this.numReproducciones = numReproducciones;
    }
  }
  
```

El código define la clase ```Cancion``` que representa una canción en una biblioteca musical. La clase tiene cinco propiedades: ```nombre```, ```duracionSegundos```, ```generos```, ```esSingle``` y ```numReproducciones```. El constructor de la clase acepta estos valores y crea una instancia de la clase ```Cancion``` con ellos. Si se proporciona una duración o un número de reproducciones negativos, el constructor lanza un error.

- Artista.ts:

```TypeScript
import { Disco } from './Discografia';

/**
 * Clase que representa un artista
 */
export class Artista {
  nombre: string;
  oyentesMensuales: number;
  discografia: Disco[];

  constructor(nombre: string, oyentesMensuales: number, discografia: Disco[]) {
    this.nombre = nombre;
    this.oyentesMensuales = oyentesMensuales;
    this.discografia = discografia;
  }

/**
* Calcula el número total de reproducciones de todas las canciones del artista
* @returns Número total de reproducciones del artista
*/
  numReproduccionesTotal(): number {
    return this.discografia.reduce((acumulador, disco) => acumulador + disco.numReproduccionesTotal(), 0);
  }
/**

Agrega un disco a la discografía del artista
@param disco Objeto Discografia que se agregará a la discografía del artista
*/
  agregarDisco(disco: Disco) {
    this.discografia.push(disco);
  }
}
```

Se define la clase ```Artista``` que tiene las propiedades ```nombre```, ```oyentesMensuales``` y ```discografia``` que representan el nombre del artista, el número de oyentes mensuales y la discografía del artista respectivamente.

El constructor de la clase acepta tres parámetros, que se utilizan para inicializar las propiedades de la instancia.

La clase también tiene dos métodos:
1. ```numReproduccionesTotal()``` que devuelve el número total de reproducciones de todas las canciones del artista.

2. ```agregarDisco(disco: Disco)``` que agrega un objeto Disco a la discografía del artista.


- Discografia.ts:

```TypeScript
import { Cancion } from './Cancion';

export class Disco {
  nombre: string;
  anioPublicacion: number;
  canciones: Cancion[];
  /**
 * Constructor de la clase Discografia
 * @param nombre Nombre de la discografía
 * @param anioPublicacion Año de publicación de la discografía
 * @param canciones Lista de canciones de la discografía
 */
  constructor(nombre: string, anioPublicacion: number, canciones: Cancion[]) {
    this.nombre = nombre;
    this.anioPublicacion = anioPublicacion;
    this.canciones = canciones;
  }

/**
 * Calcula el número total de reproducciones de todas las canciones de la discografía
 * @returns Número total de reproducciones de la discografía
 */
  numReproduccionesTotal(): number {
    return this.canciones.reduce((acumulador, cancion) => acumulador + cancion.numReproducciones, 0);
  }

/**
 * Agrega una canción
 * @param cancion 
 */
  agregarCancion(cancion: Cancion) {
    this.canciones.push(cancion);
  }

/**
 * Calcula el número de canciones de la discografía
 * @returns Número de canciones de la discografía
 */
  numCanciones(): number {
    return this.canciones.length;
  }

/**
 * Calcula la duración total de todas las canciones de la discografía
 * @returns Duración total de la discografía en segundos
 */
  duracionTotal(): number {
    return this.canciones.reduce((acumulador, cancion) => acumulador + cancion.duracionSegundos, 0);
  }
}
```

Esta vez definimos una clase llamada ```Disco``` que representa una discografía que contiene una lista de canciones. El constructor toma tres parámetros: el nombre de la discografía, el año de publicación y la lista de canciones. 

Además, la clase tiene tres métodos: 

1. ```numReproduccionesTotal()```, que devuelve el número total de reproducciones de todas las canciones en la discografía.

2. ```agregarCancion(cancion: Cancion)```, que agrega una canción a la lista de canciones de la discografía.

3. ```duracionTotal()```, que calcula la duración total de todas las canciones en la discografía en segundos.


- BilbiotecaMsuical.ts:

```TypeScript
import { Artista } from './Artista';
import { Disco } from './Discografia';
import { Cancion } from './Cancion';

/**
 * Clase que representa una biblioteca musical
 */
export class BibliotecaMusical {
  private artistas: Artista[];
  public getArtistas(): Artista[] {
    return this.artistas;
  }
  constructor() {
    this.artistas = [];
  }
  
  /**
   * Agrega un artista a la biblioteca
   * @param artista Objeto Artista que se agregará a la biblioteca
   */
  agregarArtista(artista: Artista) {
    this.artistas.push(artista);
  }

  /**
   * Busca artistas cuyo nombre contenga la cadena especificada
   * @param nombre Cadena a buscar en el nombre del artista
   * @returns Array de objetos Artista que coinciden con la búsqueda
   */
  buscarArtistas(nombre: string): Artista[] {
    return this.artistas.filter((artista) => artista.nombre.toLowerCase().includes(nombre.toLowerCase()));
  }

  /**
   * Busca discografías cuyo nombre contenga la cadena especificada
   * @param nombre Cadena a buscar en el nombre de la discografía
   * @returns Array de objetos Discografia que coinciden con la búsqueda
   */
  buscarDiscografias(nombre: string): Disco[] {
    let discografias: Disco[] = [];

    this.artistas.forEach((artista) => {
      discografias = discografias.concat(artista.discografia.filter((disco) => disco.nombre.toLowerCase().includes(nombre.toLowerCase())));
    });

    return discografias;
  }

  /**
   * Busca canciones cuyo nombre contenga la cadena especificada
   * @param nombre Cadena a buscar en el nombre de la canción
   * @returns Array de objetos Cancion que coinciden con la búsqueda
   */
  buscarCanciones(nombre: string): Cancion[] {
    let canciones: Cancion[] = [];

    this.artistas.forEach((artista) => {
      artista.discografia.forEach((disco) => {
        canciones = canciones.concat(disco.canciones.filter((cancion) => cancion.nombre.toLowerCase().includes(nombre.toLowerCase())));
      });
    });

    return canciones;
  }

  /**
   * Calcula el número de canciones de un disco
   * @param nombreDisco Nombre del disco para el que se quiere calcular el número de canciones
   * @returns Número de canciones del disco
   */
  numCancionesDisco(nombreDisco: string): number {
    let numCanciones = 0;

    this.artistas.forEach((artista) => {
      artista.discografia.forEach((disco) => {
        if (disco.nombre.toLowerCase() === nombreDisco.toLowerCase()) {
          numCanciones = disco.numCanciones();
        }
      });
    });

    return numCanciones;
  }

  /**
   * Calcula la duración de un disco en segundos
   * @param nombreDisco Nombre del disco para el que se quiere calcular la duración
   * @returns Duración en segundos del disco
   */
  duracionDisco(nombreDisco: string): number {
    let duracion = 0;

    this.artistas.forEach((artista) => {
      artista.discografia.forEach((disco) => {
        if (disco.nombre.toLowerCase() === nombreDisco.toLowerCase()) {
          duracion = disco.duracionTotal();
        }
      });
    });

    return duracion;
  }
}
````

En este código es una clase llamada ```BibliotecaMusical``` que representa una biblioteca musical. Esta clase tiene una propiedad privada llamada ```artistas```, que es una matriz de objetos ```Artista```. La clase tiene métodos para agregar un artista a la biblioteca, buscar artistas, buscar discografías y buscar canciones según una cadena de búsqueda en el nombre. También hay métodos para calcular el número de canciones y la duración de un disco en segundos según el nombre del disco.

-El método ```agregarArtista``` agrega un objeto Artista a la matriz ```artistas```. 

-El método ```buscarArtistas``` devuelve una matriz de objetos ```Artista``` que contienen la cadena de búsqueda especificada en su nombre.

-El método ```buscarDiscografias``` devuelve una matriz de objetos ```Disco``` que contienen la cadena de búsqueda especificada en su nombre, y se busca en la matriz ```discografia``` de cada ```Artista``` en ```artistas```.

-El método ```buscarCanciones``` devuelve una matriz de objetos ```Cancion``` que contienen la cadena de búsqueda especificada en su nombre, y se busca en la matriz ```canciones``` de cada ```Disco``` en la matriz ```discografia``` de cada ```Artista``` en ```artistas```.

-Los métodos ```numCancionesDisco``` y ```duracionDisco``` toman un nombre de disco como argumento y calculan el número de canciones y la duración total del disco, buscando en la matriz ```discografia``` de cada ```Artista``` en ```artistas``` y comparando el nombre del disco especificado con el nombre del disco en cada objeto ```Disco```.


- Y por último tenemos Prueba.ts:

```TypeScript
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
```

En este fichero básicamente importamos las clases mencionadas anteriormente, como ```BibliotecaMusical```, ```Artista```, ```Disco``` y ```Cancion```. Luego, crea una instancia de ```BibliotecaMusical```. Solicita información del usuario para crear una instancia de ```Cancion```, una instancia de ```Disco``` y una instancia de ```Artista```, y luego agrega la ```Cancion``` a la discografía y la discografía al artista. Después, agrega el artista a la biblioteca y muestra la información de la biblioteca en formato de tabla con ```console.table```. También, busca artistas, discografías y canciones en la biblioteca. Finalmente, calcula el número de canciones y la duración de un disco específico, según la información que metas.


#### Comprobaciones



Se han realizado pruebas con Mocha y Chai. A continuación veremos el fichero ```.spec.ts```que hemos creado para este ejercicio:


- Artista.spec.ts:

```TypeScript
import 'mocha';
import { expect } from 'chai';
import { Artista } from '../../src/ejercicio-1/Artista';


describe('Artista', () => {
  let artista: Artista;

  beforeEach(() => {
    artista = new Artista('Quevedo', 5000000, []);
  });

  it('debería tener un nombre', () => {
    expect(artista.nombre).to.equal('Quevedo');
  });

  it('debería tener un número de oyentes mensuales', () => {
    expect(artista.oyentesMensuales).to.equal(5000000);
  });

  it('debería tener una discografía vacía inicialmente', () => {
    expect(artista.discografia).to.be.an('array').that.is.empty;
  });
});
```


- Cancion.spec.ts:

```TypeScript
import 'mocha';
import { expect } from 'chai';
import { Cancion } from '../../src/ejercicio-1/Cancion';

describe('Cancion', () => {
    it('debería crear una instancia de Cancion con los valores pasados', () => {
      const cancion = new Cancion('Bebesita', 300, ['Trap'], true, 100);
      expect(cancion.nombre).to.equal('Bebesita');
      expect(cancion.duracionSegundos).to.equal(300);
      expect(cancion.generos).to.deep.equal(['Trap']);
      expect(cancion.esSingle).to.equal(true);
      expect(cancion.numReproducciones).to.equal(100);
    });

    it('debería lanzar un error si se intenta crear una instancia de Cancion con una duración negativa', () => {
      expect(() => {
        new Cancion('Bebesita', -300, ['trap'], true, 100);
      }).to.throw(Error);
    });

    it('debería lanzar un error si se intenta crear una instancia de Cancion con un número de reproducciones negativo', () => {
      expect(() => {
        new Cancion('Bebesita', 300, ['Rock'], true, -100);
      }).to.throw(Error);
    });
  });
```

- BibliotecaMusical.spec.ts:

```TypeScript
import 'mocha';
import { expect } from 'chai';
import { Artista } from '../../src/ejercicio-1/Artista';
import { BibliotecaMusical } from '../../src/ejercicio-1/BibliotecaMusical';
import { Disco } from '../../src/ejercicio-1/Discografia';
import { Cancion } from '../../src/ejercicio-1/Cancion';


describe('BibliotecaMusical', () => {
  let biblioteca: BibliotecaMusical;

  beforeEach(() => {
    biblioteca = new BibliotecaMusical();
  });

  describe('agregarArtista', () => {
    it('debería poder agregar un artista', () => {
      const artista = new Artista('Juanes', 20000000, []);
      biblioteca.agregarArtista(artista);
      expect(biblioteca.getArtistas()).to.deep.equal([artista]);
    });
  });

  describe('buscarArtistas', () => {
    it('debería poder buscar artistas cuyo nombre contenga la cadena especificada', () => {
      const artista1 = new Artista('Juanes', 20000000, []);
      const artista2 = new Artista('Juan Luis Guerra', 15000000, []);
      biblioteca.agregarArtista(artista1);
      biblioteca.agregarArtista(artista2);
      const resultado = biblioteca.buscarArtistas('Juan');
      expect(resultado).to.deep.equal([artista1, artista2]);
    });

    it('debería devolver un array vacío si no encuentra artistas', () => {
      const resultado = biblioteca.buscarArtistas('Shakira');
      expect(resultado).to.deep.equal([]);
    });
  });

  describe('buscarDiscografias', () => {
    it('debería poder buscar discografías cuyo nombre contenga la cadena especificada', () => {
      const cancion1 = new Cancion('La camisa negra', 230, ['Rock', 'Pop'], true, 10000000);
      const cancion2 = new Cancion('A Dios le pido', 320, ['Pop', 'Rock'], true, 15000000);
      const disco1 = new Disco('Mi sangre', 2004, [cancion1]);
      const disco2 = new Disco('Un Día Normal', 2002, [cancion2]);
      const artista = new Artista('Juanes', 20000000, [disco1, disco2]);
      biblioteca.agregarArtista(artista);
      const resultado = biblioteca.buscarDiscografias('normal');
      expect(resultado).to.deep.equal([disco2]);
    });

    it('debería devolver un array vacío si no encuentra discografías', () => {
      const resultado = biblioteca.buscarDiscografias('X');
      expect(resultado).to.deep.equal([]);
    });
  });

  describe('buscarCanciones', () => {
    it('debería poder buscar canciones cuyo nombre contenga la cadena especificada', () => {
      const cancion1 = new Cancion('La camisa negra', 230, ['Rock', 'Pop'], true, 10000000);
      const cancion2 = new Cancion('A Dios le pido', 320, ['Pop', 'Rock'], true, 15000000);
      const disco1 = new Disco('Mi sangre', 2004, [cancion1]);
      const disco2 = new Disco('Un Día Normal', 2002, [cancion2]);
      const artista = new Artista('Juanes', 2000000, [disco1, disco2]);
      biblioteca.agregarArtista(artista);
      const cancionesEncontradas = biblioteca.buscarCanciones('Cam');
      expect(cancionesEncontradas).to.have.lengthOf(1);
      expect(cancionesEncontradas[0].nombre).to.equal('La camisa negra');
    });

    it('debería devolver un array vacío si no se encuentran canciones', () => {
        const cancion1 = new Cancion('La camisa negra', 230, ['Rock', 'Pop'], true, 10000000);
        const cancion2 = new Cancion('A Dios le pido', 320, ['Pop', 'Rock'], true, 15000000);
        const disco1 = new Disco('Mi sangre', 2004, [cancion1]);
        const disco2 = new Disco('Un Día Normal', 2002, [cancion2]);
        const artista = new Artista('Juanes', 2000000, [disco1, disco2]);
        biblioteca.agregarArtista(artista);
        const cancionesEncontradas = biblioteca.buscarCanciones('No existo');
        expect(cancionesEncontradas).to.have.lengthOf(0);
      });
  });

  describe('numCancionesDisco', () => {
    it('debería poder calcular el número de canciones de un disco', () => {
      const cancion1 = new Cancion('Diamonds', 227, ['Pop'], true, 1000000000);
      const cancion2 = new Cancion('Umbrella', 280, ['Pop'], false, 500000000);
      const discografia = new Disco('Good Girl Gone Bad', 2007, [cancion1, cancion2]);
      const artista = new Artista('Rihanna', 100000000, [discografia]);
      biblioteca.agregarArtista(artista);
      const numCanciones = biblioteca.numCancionesDisco('Good Girl Gone Bad');
      expect(numCanciones).to.equal(2);
    });

    it('debería devolver 0 si no se encuentra el disco', () => {
      const cancion1 = new Cancion('Diamonds', 227, ['Pop'], true, 1000000000);
      const cancion2 = new Cancion('Umbrella', 280, ['Pop'], false, 500000000);
      const discografia = new Disco('Good Girl Gone Bad', 2007, [cancion1, cancion2]);
      const artista = new Artista('Rihanna', 100000000, [discografia]);
      biblioteca.agregarArtista(artista);
      const numCanciones = biblioteca.numCancionesDisco('Inventado');
      expect(numCanciones).to.equal(0);
      });
    });
    
  });
```

- Discografia.spec.ts:

```TypeScript
import 'mocha';
import { expect } from 'chai';
import { Disco } from '../../src/ejercicio-1/Discografia';
import { Cancion } from '../../src/ejercicio-1/Cancion';


describe('Discografia', () => {
    let disco: Disco;
    let canciones: Cancion[];
  
    beforeEach(() => {
      canciones = [
        new Cancion('Enter Sandman', 330, ['Rock'], true, 100),
        new Cancion('Master of Puppets', 515, ['Metal'], false, 80),
        new Cancion('Nothing Else Matters', 390, ['Rock', 'Ballad'], true, 90),
      ];
  
      disco = new Disco('Metallica', 1991, canciones);
    });
  
    it('debería tener un nombre', () => {
      expect(disco.nombre).to.equal('Metallica');
    });
  
    it('debería tener un año de publicación', () => {
      expect(disco.anioPublicacion).to.equal(1991);
    });
  
    it('debería tener una lista de canciones', () => {
      expect(disco.canciones).to.equal(canciones);
    });
  
      it('debería agregar una canción a su lista de canciones', () => {
        const cancion1 = new Cancion('Cancion 1', 180, ['Rock'], true, 100);
        const cancion2 = new Cancion('Cancion 2', 200, ['Pop'], false, 50);
        const discografia = new Disco('Mi discografia', 2022, [cancion1]);
        discografia.agregarCancion(cancion2);
        expect(discografia.canciones).to.deep.equal([cancion1, cancion2]);
      });
    
  
    it('debería poder calcular el número total de reproducciones', () => {
      expect(disco.numReproduccionesTotal()).to.equal(270);
    });
  
    it('debería poder calcular el número de canciones', () => {
      expect(disco.numCanciones()).to.equal(3);
    });
  
    it('debería poder calcular la duración total en segundos', () => {
      expect(disco.duracionTotal()).to.equal(1235);
    });
  });
```

Y como vemos, todas las pruebas propuestas son pasadas:

```bash
Artista
    ✔ debería tener un nombre
    ✔ debería tener un número de oyentes mensuales
    ✔ debería tener una discografía vacía inicialmente

  BibliotecaMusical
    agregarArtista
      ✔ debería poder agregar un artista
    buscarArtistas
      ✔ debería poder buscar artistas cuyo nombre contenga la cadena especificada
      ✔ debería devolver un array vacío si no encuentra artistas
    buscarDiscografias
      ✔ debería poder buscar discografías cuyo nombre contenga la cadena especificada
      ✔ debería devolver un array vacío si no encuentra discografías
    buscarCanciones
      ✔ debería poder buscar canciones cuyo nombre contenga la cadena especificada
      ✔ debería devolver un array vacío si no se encuentran canciones
    numCancionesDisco
      ✔ debería poder calcular el número de canciones de un disco
      ✔ debería devolver 0 si no se encuentra el disco

  Cancion
    ✔ debería crear una instancia de Cancion con los valores pasados
    ✔ debería lanzar un error si se intenta crear una instancia de Cancion con una duración negativa
    ✔ debería lanzar un error si se intenta crear una instancia de Cancion con un número de reproducciones negativo

  Discografia
    ✔ debería tener un nombre
    ✔ debería tener un año de publicación
    ✔ debería tener una lista de canciones
    ✔ debería agregar una canción a su lista de canciones
    ✔ debería poder calcular el número total de reproducciones
    ✔ debería poder calcular el número de canciones
    ✔ debería poder calcular la duración total en segundos
  

  41 passing (47ms)
```

.
.
.
.
.

## _Ejercicio 2 - Conecta 4_

### Enunciado:

Todos (o casi todos) hemos jugado alguna vez al Conecta 4.

En una rejilla de 6 filas y 7 columnas, dos jugadores se turnan para ir colocando un conjunto de fichas dejándolas caer por alguna de las siete columnas de la rejilla. Cada jugador dispone de un total de 21 fichas de un color diferente.

En cada turno, una ficha tomará la primera posición libre de la columna seleccionada por el jugador que corresponda. Si la columna está completa, esto es, ya cuenta con seis fichas, dicha columna no podrá ser seleccionada por ninguno de los dos jugadores para dejar caer otra ficha.

El objetivo del jugador es colocar cuatro fichas consecutivas ya sea en una misma fila, una misma columna o en diagonal.

Cree la jerarquía de clases e interfaces necesarias para implementar el juego Conecta 4, teniendo en cuenta la siguiente funcionalidad:

El juego comienza con el Jugador 1 colocando la primera ficha y, en turnos sucesivos, debe ir alternándose con el Jugador 2. Se deberá mostrar por consola a qué jugador le toca colocar una ficha.
Si un jugador intenta colocar una ficha en una columna completa, se mostrará un mensaje informando de que la columna está completa y se le permitirá seleccionar otra columna para colocar la ficha. Lo anterior debe repetirse hasta que el jugador coloque su ficha.
Una vez que el jugador correspondiente haya colocado una ficha, debe mostrarse por la consola el estado del tablero.
Cuando alguno de los dos jugadores gane, se debe informar de lo anterior en la consola y terminar el juego.

#### Código

- Tenemos dos ficheros que conforman el código de nuestro Conecta 4.

1. Por una parte tenemos ```Conecta4.ts```:

```TypeScript
/**
 * Objeto que representa a un jugador del juego.
 */
export interface Player {
  id: number;
  name: string;
  color: string;
}

/**
 * Clase que representa el tablero del juego Conecta 4.
 */
export class Board {
  private grid: string[][];
  private readonly rows: number = 6;
  private readonly cols: number = 7;

  /**
   * Constructor de la clase `Board`. Inicializa el tablero con el tamaño
   * especificado y lo llena con el caracter '-'.
   */
  constructor() {
    this.grid = new Array(this.rows);
    for (let i = 0; i < this.rows; i++) {
      this.grid[i] = new Array(this.cols).fill("-");
    }
  }

  /**
   * Método que coloca una ficha en la columna especificada. Si la columna no
   * es válida, se muestra un mensaje de error y se devuelve `false`. Si la
   * columna está llena, se muestra un mensaje de error y se devuelve `false`.
   * Si la ficha se coloca con éxito, se devuelve `true`.
   *
   * @param col Columna en la que se desea colocar la ficha.
   * @param piece Ficha que se desea colocar.
   * @returns `true` si la ficha se colocó con éxito, `false` si no.
   */
  public placePiece(col: number, piece: string): boolean {
    if (col < 0 || col >= this.cols) {
      console.log("Columna no válida");
      return false;
    }

    for (let row = this.rows - 1; row >= 0; row--) {
      if (this.grid[row][col] === "-") {
        this.grid[row][col] = piece;
        return true;
      }
    }

    console.log("Columna llena");
    return false;
  }

  /**
   * Método que imprime el estado actual del tablero por consola.
   */
  public print() {
    console.log(this.grid.map((row) => row.join(" ")).join("\n"));
  }

  /**
   * Método que verifica si el jugador ha ganado el juego. Verifica todas las
   * posibles combinaciones de 4 fichas consecutivas en línea, tanto horizontal
   * como verticalmente, así como en diagonal.
   *
   * @param piece Ficha del jugador actual.
   * @returns `true` si el jugador ha ganado, `false` si no.
   */
  public checkWin(piece: string): boolean {
    // Revisar líneas
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols - 3; col++) {
        if (
          this.grid[row][col] === piece &&
          this.grid[row][col + 1] === piece &&
          this.grid[row][col + 2] === piece &&
          this.grid[row][col + 3] === piece
        ) {
          return true;
        }
      }
    }

    // Revisar columnas
    for (let row = 0; row < this.rows - 3; row++) {
      for (let col = 0; col < this.cols; col++) {
        if (
          this.grid[row][col] === piece &&
          this.grid[row + 1][col] === piece &&
          this.grid[row + 2][col] === piece &&
          this.grid[row + 3][col] === piece
        ) {
          return true;
        }
      }
    }

    // Revisar diagonal de izquierda a derecha y de arriba a bajo
    for (let row = 0; row < this.rows - 3; row++) {
      for (let col = 0; col < this.cols - 3; col++) {
        if (
          this.grid[row][col] === piece &&
          this.grid[row + 1][col + 1] === piece &&
          this.grid[row + 2][col + 2] === piece &&
          this.grid[row + 3][col + 3] === piece
        ) {
          return true;
        }
      }
    }

    // Revisar diagonal de izquierda a derecha y de abajo a arriba
    for (let row = 3; row < this.rows; row++) {
      for (let col = 0; col < this.cols - 3; col++) {
        if (
          this.grid[row][col] === piece &&
          this.grid[row - 1][col + 1] === piece &&
          this.grid[row - 2][col + 2] === piece &&
          this.grid[row - 3][col + 3] === piece
        ) {
          return true;
        }
      }
    }

    return false;
  }
}
```

En este fichero se define la interfaz ```Player```, que representa a un jugador del juego Conecta 4, y la clase ```Board```, que representa el tablero del juego.

La clase ```Board``` tiene tres métodos: 

- ```placePiece()```: que coloca una ficha en una columna específica del tablero. Verifica si la columna es válida y si está llena. Si la ficha se coloca con éxito, devuelve true; de lo contrario, devuelve false.
- ```print()```: que imprime el estado actual del tablero por consola. 
- ```checkWin()```: que verifica si el jugador ha ganado el juego. También verifica todas las posibles combinaciones de 4 fichas seguidas en línea, tanto horizontal como verticalmente, así como en diagonal. Si encuentra una combinación ganadora, devuelve true, de lo contrario, devuelve false.

2. Por otra parte tenemos ```PruebaConecta4.ts```:

```TypeScript
import { Board } from "./Conecta4";
import { Player } from "./Conecta4";
import * as readline from "readline";

/**
 * Objeto que representa al primer jugador, cuya ficha será X.
 */
const player1: Player = {
  id: 1,
  name: "Jugador 1",
  color: "X",
};

/**
 * Objeto que representa al segundo jugador, cuya ficha será @.
 */
const player2: Player = {
  id: 2,
  name: "Jugador 2",
  color: "@",
};

/**
 * Objeto que representa al tablero del conecta 4.
 */
const board: Board = new Board();

/**
 * Esta función se encarga de solicitar al jugador actual que seleccione una columna
 * en la que colocar su ficha. Una vez que se ha seleccionado una columna válida,
 * la función llama a la función `placePiece()` de la clase `Board` para colocar la
 * ficha en el tablero. Si el jugador gana el juego, se muestra un mensaje de
 * felicitación y se sale de la función. Si el jugador no gana, se llama a la función
 * `promptPlayer()` para solicitar la entrada del siguiente jugador.
 *
 * @param board Tablero actual del juego.
 * @param player Jugador actual.
 */
function promptPlayer(board: Board, player: Player) {
  console.log(`Es el turno del ${player.name}. Introduce el número de columna en la que quieres poner ficha (0-6):`);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", (colStr: string) => {
    rl.close();

    const col = parseInt(colStr);
    if (isNaN(col)) {
      console.log("Entrada no válida");
      promptPlayer(board, player);
    } else if (board.placePiece(col, player.color)) {
      board.print();

      if (board.checkWin(player.color)) {
        console.log(`¡${player.name} ha ganado!`);
        return;
      }

      if (player === player1) {
        promptPlayer(board, player2);
      } else {
        promptPlayer(board, player1);
      }
    } else {
      console.log("Columna llena");
      promptPlayer(board, player);
    }
  });
}

promptPlayer(board, player1);
```

En este fichero tenemos la implementación de la función ```promptPlayer()``` que se encarga de solicitar al jugador actual que seleccione una columna en la que colocar su ficha en el juego Conecta 4.

Primero, se imprime un mensaje en la consola para indicar el turno del jugador y se crea una interfaz ```readline``` para recibir la entrada del usuario. Luego, cuando el usuario introduce una entrada, se llama a la función ```placePiece()``` de la clase ```Board``` para colocar la ficha del jugador en el tablero en la columna introducida por teclado.

Si el jugador gana porque hace 4 en raya de alguna de las posibles formas que han sido definidas, se muestra un mensaje de felicitación y se sale de la función. Si el jugador no gana, se llama a la función ```promptPlayer()``` para solicitar la entrada del siguiente jugador.

La función toma dos parámetros: el tablero actual del juego y el jugador actual. La función se llama al inicio del juego con el primer jugador como parámetro.

Las fichas de juego definidas son X para el jugador 1, y @ para el jugador 2.

#### Comprobaciones

Se han realizado pruebas con Mocha y Chai. A continuación veremos el fichero ```.spec.ts```que hemos creado para este ejercicio:

```TypeScript
import { Board } from "../../src/ejercicio-2/Conecta4";
import { expect } from "chai";
import "mocha";

describe("Board", () => {
  describe("placePiece()", () => {
    it("debería devolver true si la ficha se pone en una columna vacía", () => {
      const board = new Board();
      const result = board.placePiece(0, "X");
      expect(result).to.be.true;
    });

    it("debería devolver false si la columna esta llena", () => {
      const board = new Board();
      board.placePiece(0, "X");
      board.placePiece(0, "@");
      board.placePiece(0, "X");
      board.placePiece(0, "@");
      board.placePiece(0, "X");
      board.placePiece(0, "@");
      const result = board.placePiece(0, "X");
      expect(result).to.be.false;
    });

    it("debería devolver false si la columna elegida no está en el rango 0-6", () => {
      const board = new Board();
      const result = board.placePiece(-1, "X");
      expect(result).to.be.false;
    });
  });
});

  describe("checkWin()", () => {
    it("debería devolver true si 4 fichas están en línea horizontal", () => {
      const board = new Board();
      board.placePiece(0, "X");
      board.placePiece(1, "X");
      board.placePiece(2, "X");
      board.placePiece(3, "X");
      const result = board.checkWin("X");
      expect(result).to.be.true;
    });

    it("debería devolver true si 4 fichas están en línea vertical", () => {
      const board = new Board();
      board.placePiece(0, "@");
      board.placePiece(0, "@");
      board.placePiece(0, "@");
      board.placePiece(0, "@");
      const result = board.checkWin("@");
      expect(result).to.be.true;
    });

    it("debería devolver true si 4 fichas están en diagonal de izquierda a derecha y de arriba a bajo", () => {
      const board = new Board();
      board.placePiece(0, "X");
      board.placePiece(1, "@");
      board.placePiece(1, "X");
      board.placePiece(2, "@");
      board.placePiece(2, "@");
      board.placePiece(2, "X");
      board.placePiece(3, "@");
      board.placePiece(3, "@");
      board.placePiece(3, "@");
      board.placePiece(3, "X");
      const result = board.checkWin("X");
      expect(result).to.be.true;
    });

    it("debería devolver true si 4 fichas están en diagonal de izquierda a derecha y de abajo a arriba)", () => {
      const board = new Board();
      board.placePiece(0, "@");
      board.placePiece(0, "@");
      board.placePiece(0, "@");
      board.placePiece(0, "X");
      board.placePiece(1, "@");
      board.placePiece(1, "@");
      board.placePiece(1, "X");
      board.placePiece(2, "@");
      board.placePiece(2, "X");
      board.placePiece(3, "X");
      const result = board.checkWin("X");
      expect(result).to.be.true;
    });

    it("debería devolver false si no hay 4 fichas conectadas de ninguna manera", () => {
      const board = new Board();
      board.placePiece(0, "@");
      board.placePiece(1, "@");
      board.placePiece(2, "@");
      board.placePiece(3, "X");
      board.placePiece(3, "@");
      board.placePiece(4, "X");
      board.placePiece(4, "X");
      board.placePiece(5, "X");
      const result = board.checkWin("@");
      expect(result).to.be.false;
    });
});
```

Y como vemos, todas las pruebas propuestas son pasadas:

```bash
  Board
    placePiece()
      ✔ debería devolver true si la ficha se pone en una columna vacía
Columna llena
      ✔ debería devolver false si la columna esta llena
Columna no válida
      ✔ debería devolver false si la columna elegida no está en el rango 0-6

  checkWin()
    ✔ debería devolver true si 4 fichas están en línea horizontal
    ✔ debería devolver true si 4 fichas están en línea vertical
    ✔ debería devolver true si 4 fichas están en diagonal de izquierda a derecha y de arriba a bajo
    ✔ debería devolver true si 4 fichas están en diagonal de izquierda a derecha y de abajo a arriba
    ✔ debería devolver false si no hay 4 fichas conectadas de ninguna manera
```

A continuación se muestra una partida:

```TypeScript
Es el turno del Jugador 1. Introduce el número de columna en la que quieres poner ficha (0-6):
> 0
- - - - - - -
- - - - - - -
- - - - - - -
- - - - - - -
- - - - - - -
X - - - - - -
Es el turno del Jugador 2. Introduce el número de columna en la que quieres poner ficha (0-6):
6
- - - - - - -
- - - - - - -
- - - - - - -
- - - - - - -
- - - - - - -
X - - - - - @
Es el turno del Jugador 1. Introduce el número de columna en la que quieres poner ficha (0-6):
1
- - - - - - -
- - - - - - -
- - - - - - -
- - - - - - -
- - - - - - -
X X - - - - @
Es el turno del Jugador 2. Introduce el número de columna en la que quieres poner ficha (0-6):
1
- - - - - - -
- - - - - - -
- - - - - - -
- - - - - - -
- @ - - - - -
X X - - - - @
Es el turno del Jugador 1. Introduce el número de columna en la que quieres poner ficha (0-6):
2
- - - - - - -
- - - - - - -
- - - - - - -
- - - - - - -
- @ - - - - -
X X X - - - @
Es el turno del Jugador 2. Introduce el número de columna en la que quieres poner ficha (0-6):
2
- - - - - - -
- - - - - - -
- - - - - - -
- - - - - - -
- @ @ - - - -
X X X - - - @
Es el turno del Jugador 1. Introduce el número de columna en la que quieres poner ficha (0-6):
1
- - - - - - -
- - - - - - -
- - - - - - -
- X - - - - -
- @ @ - - - -
X X X - - - @
Es el turno del Jugador 2. Introduce el número de columna en la que quieres poner ficha (0-6):
1
- - - - - - -
- - - - - - -
- @ - - - - -
- X - - - - -
- @ @ - - - -
X X X - - - @
Es el turno del Jugador 1. Introduce el número de columna en la que quieres poner ficha (0-6):
2
- - - - - - -
- - - - - - -
- @ - - - - -
- X X - - - -
- @ @ - - - -
X X X - - - @
Es el turno del Jugador 2. Introduce el número de columna en la que quieres poner ficha (0-6):
3
- - - - - - -
- - - - - - -
- @ - - - - -
- X X - - - -
- @ @ - - - -
X X X @ - - @
Es el turno del Jugador 1. Introduce el número de columna en la que quieres poner ficha (0-6):
3
- - - - - - -
- - - - - - -
- @ - - - - -
- X X - - - -
- @ @ X - - -
X X X @ - - @
Es el turno del Jugador 2. Introduce el número de columna en la que quieres poner ficha (0-6):
3
- - - - - - -
- - - - - - -
- @ - - - - -
- X X @ - - -
- @ @ X - - -
X X X @ - - @
Es el turno del Jugador 1. Introduce el número de columna en la que quieres poner ficha (0-6):
3
- - - - - - -
- - - - - - -
- @ - X - - -
- X X @ - - -
- @ @ X - - -
X X X @ - - @
Es el turno del Jugador 2. Introduce el número de columna en la que quieres poner ficha (0-6):
4
- - - - - - -
- - - - - - -
- @ - X - - -
- X X @ - - -
- @ @ X - - -
X X X @ @ - @
Es el turno del Jugador 1. Introduce el número de columna en la que quieres poner ficha (0-6):
4
- - - - - - -
- - - - - - -
- @ - X - - -
- X X @ - - -
- @ @ X X - -
X X X @ @ - @
Es el turno del Jugador 2. Introduce el número de columna en la que quieres poner ficha (0-6):
4
- - - - - - -
- - - - - - -
- @ - X - - -
- X X @ @ - -
- @ @ X X - -
X X X @ @ - @
Es el turno del Jugador 1. Introduce el número de columna en la que quieres poner ficha (0-6):
4
- - - - - - -
- - - - - - -
- @ - X X - -
- X X @ @ - -
- @ @ X X - -
X X X @ @ - @
Es el turno del Jugador 2. Introduce el número de columna en la que quieres poner ficha (0-6):
6
- - - - - - -
- - - - - - -
- @ - X X - -
- X X @ @ - -
- @ @ X X - @
X X X @ @ - @
Es el turno del Jugador 1. Introduce el número de columna en la que quieres poner ficha (0-6):
4
- - - - - - -
- - - - X - -
- @ - X X - -
- X X @ @ - -
- @ @ X X - @
X X X @ @ - @
Es el turno del Jugador 2. Introduce el número de columna en la que quieres poner ficha (0-6):
0
- - - - - - -
- - - - X - -
- @ - X X - -
- X X @ @ - -
@ @ @ X X - @
X X X @ @ - @
Es el turno del Jugador 1. Introduce el número de columna en la que quieres poner ficha (0-6):
5
- - - - - - -
- - - - X - -
- @ - X X - -
- X X @ @ - -
@ @ @ X X - @
X X X @ @ X @
Es el turno del Jugador 2. Introduce el número de columna en la que quieres poner ficha (0-6):
5
- - - - - - -
- - - - X - -
- @ - X X - -
- X X @ @ - -
@ @ @ X X @ @
X X X @ @ X @
Es el turno del Jugador 1. Introduce el número de columna en la que quieres poner ficha (0-6):
5
- - - - - - -
- - - - X - -
- @ - X X - -
- X X @ @ X -
@ @ @ X X @ @
X X X @ @ X @
Es el turno del Jugador 2. Introduce el número de columna en la que quieres poner ficha (0-6):
5
- - - - - - -
- - - - X - -
- @ - X X @ -
- X X @ @ X -
@ @ @ X X @ @
X X X @ @ X @
Es el turno del Jugador 1. Introduce el número de columna en la que quieres poner ficha (0-6):
6
- - - - - - -
- - - - X - -
- @ - X X @ -
- X X @ @ X X
@ @ @ X X @ @
X X X @ @ X @
Es el turno del Jugador 2. Introduce el número de columna en la que quieres poner ficha (0-6):
5
- - - - - - -
- - - - X @ -
- @ - X X @ -
- X X @ @ X X
@ @ @ X X @ @
X X X @ @ X @
Es el turno del Jugador 1. Introduce el número de columna en la que quieres poner ficha (0-6):
5
- - - - - X -
- - - - X @ -
- @ - X X @ -
- X X @ @ X X
@ @ @ X X @ @
X X X @ @ X @
¡Jugador 1 ha ganado!
```

.
.
.
.
.


## _Ejercicio 1 - PE103_

### Enunciado:

Vives en Cartesia, la ciudad donde todas las carreteras están diseñadas para formar una rejilla perfecta. Imagina que tienes una reunión muy importante y llegas 10 minutos antes de la hora prevista. Para relajar lo nervios, te dispones a dar un paseo corto. Afortunadamente, la ciudad ha desarrollado una aplicación que genera paseos en sus smartphones (cada vez que se ejecuta la aplicación, nos envía un array de cadenas de una única letra que representan las direcciones en las que debemos caminar ['n', 's', 'e', 'o']). Ten en cuenta que solo caminas un bloque por cada letra, y que además cada bloque lo recorres en un minuto. El objetivo es crear una función que reciba un array con las letras que definen el paseo que ha generado la app y devuelva verdadero o falso si el paseo que nos ha proporcionado la app se puede realizar en exactamente 10 minutos. Recuerda que quieres ser puntual para la reunión. Por supuesto, hay que tener en cuenta que el paseo nos devuelve al punto de partida, en otro caso la función debería devolver falso. La función deberá devolver undefined si el paseo incluye alguna dirección no válida o un array vacío.


#### Código

``` TypeScript
/**
 * Comprueba si un paseo generado por una aplicación de la ciudad de Cartesia
 * puede ser completado en exactamente 10 minutos y regresa al punto de partida.
 * @param paseo Array de cadenas de una única letra que representan las direcciones en las que debemos caminar.
 * @returns Verdadero si el paseo se puede completar en exactamente 10 minutos y regresa al punto de partida,
 * falso en otro caso. Undefined si el paseo incluye alguna dirección no válida o un array vacío.
 */
export function comprobarPaseo(paseo: string[]): boolean | undefined {
    const DIRECCIONES_VALIDAS = ['n', 's', 'e', 'o']; // válidas
    let x = 0; // Coordenada x
    let y = 0; // Coordenada y
    let tiempo = 0; // Tiempo transcurrido
  
    if (!paseo || paseo.length === 0) {
      return undefined;
    }
  
    for (const direccion of paseo) {
      if (!DIRECCIONES_VALIDAS.includes(direccion)) {
        return undefined;
      }
  
      switch (direccion) {
        case 'n':
          y++;
          break;
        case 's':
          y--;
          break;
        case 'e':
          x++;
          break;
        case 'o':
          x--;
          break;
      }
  
      tiempo++;
    }
  
    return tiempo === 10 && x === 0 && y === 0;
  }
```

Lo primero, definimos una función llamada ```comprobarPaseo``` que recibe un array de cadenas como argumento. Este array representa las direcciones que debemos seguir para dar un paseo.

La función tiene definido un array ```DIRECCIONES_VALIDAS``` con las direcciones válidas que podemos utilizar en el paseo. Luego, inicializa las coordenadas ```x``` e ```y``` a 0 y el tiempo transcurrido a 0.

La función verifica que el array de direcciones paseo no sea vacío o nulo. Si lo es, devuelve ```undefined```.

A continuación, la función itera sobre cada dirección del paseo, verificando si es una dirección válida. Si no lo es, devuelve ```undefined```. Si la dirección es válida, actualiza las coordenadas ```x``` e ```y``` en función de la dirección. También incrementa el tiempo transcurrido.

Y al final, la función devuelve true si el tiempo transcurrido es exactamente 10 minutos y las coordenadas ```x``` e ```y``` han vuelto a ser 0. De lo contrario, devuelve false.


#### Comprobaciones


Se han realizado pruebas con Mocha y Chai. A continuación veremos el fichero ```.spec.ts```que hemos creado para este ejercicio:

```TypeScript
import 'mocha';
import { expect } from 'chai';
import { comprobarPaseo } from '../../src/ejercicio-PE103-1/ejercicio-PE103-1';


describe('comprobarPaseo', () => {
  it('debería devolver verdadero si el paseo se puede completar en exactamente 10 minutos y regresa al punto de partida', () => {
    const paseo = ['n', 'n', 'o', 'o', 's', 's', 'e', 'e', 'e', 'o'];
    const resultado = comprobarPaseo(paseo);
    expect(resultado).to.equal(true);
  });



  it('debería devolver falso si el paseo tarda más de 10 minutos', () => {
    const paseo = ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'];
    const resultado = comprobarPaseo(paseo);
    expect(resultado).to.equal(false);
  });

  it('debería devolver undefined si el paseo incluye una dirección no válida', () => {
    const paseo = ['n', 's', 'e', 'o', 'a'];
    const resultado = comprobarPaseo(paseo);
    expect(resultado).to.equal(undefined);
  });

  it('debería devolver undefined si el paseo es un array vacío', () => {
    const paseo: string[] = [];
    const resultado = comprobarPaseo(paseo);
    expect(resultado).to.equal(undefined);

  it('debería devolver falso si el paseo no regresa al punto de partida', () => {
        const paseo = ['n', 'o', 's', 'e'];
        const resultado = comprobarPaseo(paseo);
        expect(resultado).to.equal(false);
      });

  });
});
```

Y como vemos, todas las pruebas propuestas para comprobar si cumplimos con los requisitos del enunciado son pasadas:

```bash
  comprobarPaseo
    ✔ debería devolver verdadero si el paseo se puede completar en exactamente 10 minutos y regresa al punto de partida
    ✔ debería devolver falso si el paseo tarda más de 10 minutos
    ✔ debería devolver undefined si el paseo incluye una dirección no válida
    ✔ debería devolver undefined si el paseo es un array vacío
```

.
.
.
.
.


## _Ejercicio 2 - PE103_

### Enunciado:

Diseñe un conjunto de clases con las propiedades y métodos correspondientes para implementar las siguientes especificaciones:

-Una persona tiene una serie de datos personales, como pueden ser su nombre, apellidos, fecha de nacimiento, género, etc. Todos esos atributos deberían ser privados, por lo que deberán existir métodos getters y setters que permitan acceder a todos ellos, tanto para leerlos, como para modificarlos. A lo anterior en POO se le denomina encapsulación.

-Un estudiante es una persona que, además, posee algunas propiedades adicionales, como un correo electrónico institucional, entre otras que se le puedan ocurrir.

-Un profesor es una persona que, además, posee algunas propiedades adicionales, como un correo electrónico institucional, entre otras que se le puedan ocurrir.

-Una asignatura permite relacionar un conjunto de profesores que la imparten con un conjunto de estudiantes que la cursan.

-Una asignatura debe permitir obtener el listado de alumnado que cursa la asignatura.

-Una asignatura debe permitir obtener el listado del profesorado que imparte la asignatura.

#### Código

``` TypeScript
/**
 * Clase que representa a una persona con datos personales.
 */
export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _fechaNacimiento: Date;
    private _genero: string;
  
    /**
     * Crea una nueva instancia de la clase Persona.
     * @param nombre El nombre de la persona.
     * @param apellidos Los apellidos de la persona.
     * @param fechaNacimiento La fecha de nacimiento de la persona.
     * @param genero El género de la persona.
     */
    constructor(nombre: string, apellidos: string, fechaNacimiento: Date, genero: string) {
      this._nombre = nombre;
      this._apellidos = apellidos;
      this._fechaNacimiento = fechaNacimiento;
      this._genero = genero;
    }
  
    public get nombre(): string {
      return this._nombre;
    }
  
    public set nombre(nombre: string) {
      this._nombre = nombre;
    }
  
    public get apellidos(): string {
      return this._apellidos;
    }
  
    public set apellidos(apellidos: string) {
      this._apellidos = apellidos;
    }
  
    public get fechaNacimiento(): Date {
      return this._fechaNacimiento;
    }
  
    public set fechaNacimiento(fechaNacimiento: Date) {
      this._fechaNacimiento = fechaNacimiento;
    }
  
    public get genero(): string {
      return this._genero;
    }
  
    public set genero(genero: string) {
      this._genero = genero;
    }
  }
  
/**
* Clase que representa a un estudiante, que es una persona con correo electrónico institucional.
*/
export class Estudiante extends Persona {
    private _correoInstitucional: string;
  
    /**
     * Crea una nueva instancia de la clase Estudiante.
     * @param nombre El nombre del estudiante.
     * @param apellidos Los apellidos del estudiante.
     * @param fechaNacimiento La fecha de nacimiento del estudiante.
     * @param genero El género del estudiante.
     * @param correoInstitucional El correo electrónico institucional del estudiante.
     */
    constructor(nombre: string, apellidos: string, fechaNacimiento: Date, genero: string, correoInstitucional: string) {
      super(nombre, apellidos, fechaNacimiento, genero);
      this._correoInstitucional = correoInstitucional;
    }
  
    public get correoInstitucional(): string {
    return this._correoInstitucional;
    }

    public set correoInstitucional(correoInstitucional: string) {
    this._correoInstitucional = correoInstitucional;
    }
    }
    
/**
* Clase que representa a un profesor, que es una persona con correo electrónico institucional.
*/
export class Profesor extends Persona {
    private _correoInstitucional: string;
    /**
    *Crea una nueva instancia de la clase Profesor.
    @param nombre El nombre del profesor.
    @param apellidos Los apellidos del profesor.
    @param fechaNacimiento La fecha de nacimiento del profesor.
    @param genero El género del profesor.
    @param correoInstitucional El correo electrónico institucional del profesor.
    */
    constructor(nombre: string, apellidos: string, fechaNacimiento: Date, genero: string, correoInstitucional: string) {
    super(nombre, apellidos, fechaNacimiento, genero);
    this._correoInstitucional = correoInstitucional;
    }

    public get correoInstitucional(): string {
    return this._correoInstitucional;
    }

    public set correoInstitucional(correoInstitucional: string) {
    this._correoInstitucional = correoInstitucional;
    }
    }

/**
* Clase que representa a una asignatura, que relaciona un conjunto de profesores que la imparten con un conjunto de estudiantes que la cursan.
*/
export class Asignatura {
    private _profesores: Profesor[];
    private _estudiantes: Estudiante[];
    /**
    
    Crea una nueva instancia de la clase Asignatura.
    @param profesores El conjunto de profesores que imparten la asignatura.
    @param estudiantes El conjunto de estudiantes que cursan la asignatura.
    */
    constructor(profesores: Profesor[], estudiantes: Estudiante[]) {
    this._profesores = profesores;
    this._estudiantes = estudiantes;
    }

    public get alumnado(): Estudiante[] {
    return this._estudiantes;
    }

    public get profesorado(): Profesor[] {
    return this._profesores;
    }

    set estudiantes(estudiantes: Estudiante[]) {
        this._estudiantes = estudiantes;
      }
    }
```

Son definidas varias clases. La clase ```Persona``` representa a una persona con sus datos personales, y luego tenemos que la clase ```Estudiante``` y la clase ```Profesor``` son clases que extienden de la clase ```Persona``` y añaden un atributo ```correoInstitucional```, que representa el correo electrónico institucional de un estudiante o de un profesor.

La clase ```Asignatura``` representa una asignatura, que relaciona un conjunto de profesores que la imparten con un conjunto de estudiantes que la cursan.

Las clases se definen con un constructor y métodos get y set para acceder y modificar sus atributos.


#### Comprobaciones



Se han realizado pruebas con Mocha y Chai. A continuación veremos el fichero ```.spec.ts```que hemos creado para este ejercicio:

```TypeScript
import 'mocha';
import { expect } from 'chai';
import { Persona } from '../../src/ejercicio-PE103-2/ejercicio-PE103-2';
import { Estudiante } from '../../src/ejercicio-PE103-2/ejercicio-PE103-2';
import { Profesor } from '../../src/ejercicio-PE103-2/ejercicio-PE103-2';
import { Asignatura } from '../../src/ejercicio-PE103-2/ejercicio-PE103-2';


describe('Pruebas para la implementación de clases', () => {
  describe('Pruebas para la clase Persona', () => {
    it('El método get nombre debe devolver el nombre de la persona', () => {
      const persona = new Persona('Eduardo', 'Rodriguez', new Date(1999, 10, 15), 'M');
      expect(persona.nombre).to.equal('Eduardo');
    });

    it('El método set nombre debe establecer el nombre de la persona', () => {
      const persona = new Persona('Eduardo', 'Rodriguez', new Date(1999, 10, 15), 'M');
      persona.nombre = 'Petra';
      expect(persona.nombre).to.equal('Petra');
    });
  });

  describe('Pruebas para la clase Estudiante', () => {
    it('El método get correoInstitucional debe devolver el correo electrónico institucional del estudiante', () => {
      const estudiante = new Estudiante('Eduardo', 'Rodriguez', new Date(1999, 10, 15), 'M', 'Eduardo.rodriguez@ejemplo.com');
      expect(estudiante.correoInstitucional).to.equal('Eduardo.rodriguez@ejemplo.com');
    });

    it('El método set correoInstitucional debe establecer el correo electrónico institucional del estudiante', () => {
      const estudiante = new Estudiante('Eduardo', 'Rodriguez', new Date(1999, 10, 15), 'M', 'Eduardo.rodriguez@ejemplo.com');
      estudiante.correoInstitucional = 'Eduardo.rodriguez@ejemplo.com';
      expect(estudiante.correoInstitucional).to.equal('Eduardo.rodriguez@ejemplo.com');
    });
  });

  describe('Pruebas para la clase Profesor', () => {
    it('El método get correoInstitucional debe devolver el correo electrónico institucional del profesor', () => {
      const profesor = new Profesor('Petra', 'Hermosa', new Date(1777, 7, 7), 'F', 'Petra.gonzalez@ejemplo.com');
      expect(profesor.correoInstitucional).to.equal('Petra.gonzalez@ejemplo.com');
    });

    it('El método set correoInstitucional debe establecer el correo electrónico institucional del profesor', () => {
      const profesor = new Profesor('Petra', 'Hermosa', new Date(1777, 7, 7), 'F', 'Petra.gonzalez@ejemplo.com');
      profesor.correoInstitucional = 'Petra.gonzalez2@ejemplo.com';
      expect(profesor.correoInstitucional).to.equal('Petra.gonzalez2@ejemplo.com');
    });
  });

  describe('Pruebas para la clase Asignatura', () => {
    const estudiante1 = new Estudiante('Eduardo', 'Rodriguez', new Date(1999, 10, 15), 'M', 'Eduardo.rodriguez@ejemplo.com');
    const estudiante2 = new Estudiante('Pepe', 'Benavente', new Date(1500, 1, 1), 'M', 'Pepe.benavente@ejemplo.com');
    const profesor1 = new Profesor('Petra', 'Hermosa', new Date(1777, 7, 7), 'F', 'Petra.gonzalez@ejemplo.com');
    const profesor2 = new Profesor('Machu', 'Pichu', new Date(1000, 10, 10), 'M', 'Machu.pichu@ejemplo.com');
    const asignatura = new Asignatura([profesor1, profesor2], [estudiante1, estudiante2]);


    it('El método get profesorado debe devolver el listado de profesores que imparten la asignatura', () => {
      expect(asignatura.profesorado).to.deep.equal([profesor1, profesor2]);
      });
    });
    
  });
```

Y como vemos, todas las pruebas propuestas son pasadas:

```bash
Pruebas para la implementación de clases
    Pruebas para la clase Persona
      ✔ El método get nombre debe devolver el nombre de la persona
      ✔ El método set nombre debe establecer el nombre de la persona
    Pruebas para la clase Estudiante
      ✔ El método get correoInstitucional debe devolver el correo electrónico institucional del estudiante
      ✔ El método set correoInstitucional debe establecer el correo electrónico institucional del estudiante
    Pruebas para la clase Profesor
      ✔ El método get correoInstitucional debe devolver el correo electrónico institucional del profesor
      ✔ El método set correoInstitucional debe establecer el correo electrónico institucional del profesor
    Pruebas para la clase Asignatura
      ✔ El método get profesorado debe devolver el listado de profesores que imparten la asignatura


  41 passing (49ms)
```

.
.
.
.
.



## Elementos Bibliográficos:

- Guión de la Práctica 5, https://ull-esit-inf-dsi-2223.github.io/prct05-objects-classes-interfaces/ .

- Guia de TypeDoc, https://typedoc.org/guides/installation/ .

- Comentarios en TypeDoc, https://typedoc.org/guides/doccomments/ .

- Guía sobre Mocha, https://mochajs.org/#getting-started .

- Guía sobre Chai, https://www.chaijs.com/guide/ .

- Sobre un warning en particular de TypeDoc, https://github.com/TypeStrong/typedoc/issues/1739 .

- Adam Freeman - Essential TypeScript 4: From Beginner to ProURL,https://www.oreilly.com/library/view/essential-typescript-4/9781484270110/html/Part_1.xhtml .

- Basic writing and formatting syntax, https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax .




## Conclusiones

Estos dos ejercicios han sido bastante entretenidos, sobre todo el segundo, tanto para probar cosas como para aprender e incluso divertirnos a través de ese aprendizaje. En este caso gracias a estos ejercicios hemos aprendido y mejorado en cuanto a conocer más en profundidad los arrays, tuplas y enumerados. 

También hay que destacar que hemos aprendido nociones básicas de TypeDoc para poder generar documentación muy útil de una manera muy sencilla realmente. Por otra parte podríamos decir que lo más complejo esta vez ha sido empezar a hacer tests con Mocha y la librería Chai, pero es cuestión de ir probando cosas, que a base de errores también se aprende.

Además, estas pruebas realizadas de manera exclusiva para cada ejercicio, al principio las ves como algo absurdo porque piensas (o al menos en mi caso) que son lo mismo que los ```console.log()```, pero luego te das cuenta de que te permiten probar la eficacia de tu código y su funcionalidad de una manera más "concentrada".