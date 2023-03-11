# Práctica 6

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-edurguezsb/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-edurguezsb?branch=master)

En esta actividad, la Práctica 6 de la asignatura, se nos plantean varios problemas de programación que nos ayudarán a conocer más en profundidad las clases e interfaces genéricas del lenguaje TypeScript. Sin olvidarnos de utilizar los principios SOLID de diseño orientado a objetos.
A continuación se mostrarán las soluciones para los problemas mencionados anteriormente, acompañados de explicaciones, pruebas y comentarios que faciliten su comprensión.

Los objetivos de esta práctica son familiarizarnos con el manejo de clases e interfaces genéricas ya que son componentes fundamentales y que serán necesarios para el correcto desarrollo y avance en la asignatura de Desarrollo de Sistemas Informáticos, juntos con lo ya trabjado en prácticas anteriores, y lo que iremos viendo en las próximas semanas. 

También podríamos destacar como objetivo empezar a utilizar Coveralls e Instanbul, para poder hacer un seguimiento sobre nuestro código de una manera mucho más eficiente.


## _Ejercicio 1 - DSIflix_

### Enunciado:

Imagine que tiene que diseñar el modelo de datos de una plataforma de vídeo en streaming. A través del catálogo de dicha plataforma se puede acceder a películas, series y documentales:

Defina una interfaz genérica Streamable que trate de especificar propiedades y métodos con los que debería contar una colección de emisiones concreta como, por ejemplo, una colección de series. Por ejemplo, deberían definirse métodos de búsqueda en dicha interfaz, que permitan obtener listados en función de diferentes términos de búsqueda: por año o por nombre, entre otros.
Defina una clase abstracta genérica BasicStreamableCollection que implemente dicha interfaz genérica. En este punto, podrá particularizar algunas de las propiedades y métodos de la interfaz Streamable, aunque otros tendrán que permanecer como abstractos para ser definidos más abajo en la jerarquía de clases. Todo dependerá del diseño que haya llevado a cabo.
Tendrá que extender la clase abstracta anterior para obtener subclases que modelen cada uno de los tres tipos de colecciones: series, películas y documentales.
Trate de aplicar los principios SOLID. Preste especial atención al diseño de la interfaz Streamable. Si cree que debe dividirla en interfaces genéricas más pequeñas porque su diseño inicial es muy complejo, hágalo, con el objetivo de cumplir con el cuarto principio SOLID Interface segregation.

#### Código

El ejercicio uno se divide en varios ficheros que voy a explicar a continuación brevemente.

- BasicStremeableCollection.ts:

``` TypeScript
import { Streamable } from "./Streamable";

export abstract class BasicStreamableCollection<T> implements Streamable {
    constructor(protected collection: T[]) {}

    abstract searchName(name: string): T[];
    abstract searchYear(year: number): T[];
}
```

Este código define una clase abstracta llamada ```BasicStreamableCollection<T>``` que implementa la interfaz ```Streamable```. La clase tiene dos métodos abstractos, ```searchName``` y ```searchYear```, y un constructor que toma un arreglo de objetos tipo ```T``` y lo almacena en una propiedad protegida llamada ```collection```. La clase ```BasicStreamableCollection``` es abstracta, lo que significa que debe ser extendida por una subclase para ser utilizada.

- Documentaries.ts:

```TypeScript
import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Documentarie } from "./Interfaces";

export class DocumentalesCollection extends BasicStreamableCollection<Documentarie> {
    searchName(name: string): Documentarie[] {
        return this.collection.filter((documentales) => documentales.nombre === name);
    }

    searchYear(year: number): Documentarie[] {
        return this.collection.filter((documentales) => documentales.año === year);
    }

    searchDuration(duration: number): Documentarie[] {
        return this.collection.filter((documentales) => documentales.duracion === duration);
    }

    searchTopic(topic: string): Documentarie[] {
        return this.collection.filter((documentales) => documentales.topico === topic);
    }
}
```

Se define una clase llamada ```DocumentalesCollection```. Esta clase extiende la clase ```BasicStreamableCollection``` y se especializa para contener objetos de tipo ```Documentarie```. La clase tiene cuatro métodos para buscar dentro de la colección de documentales por nombre, año, duración y tema. Cada uno de estos métodos utiliza el método ```filter``` para buscar los elementos de la colección que coincidan con los criterios especificados y los devuelve en forma de arreglo de objetos ```Documentarie```.

- Interfaces.ts:

```TypeScript
export interface Serie{
  nombre: string;
  año: number;
  temporadas: number;
}

export interface Documentarie{
  nombre: string;
  año: number;
  duracion: number;
  topico: string;
}

export interface Movie{
  nombre: string;
  año: number;
  duracion: number;
}
```
Se definen tres interfaces:

1. La interfaz ```Serie``` tiene tres propiedades: nombre que es de tipo ```string```, año que es de tipo ```number``` y temporadas que también es de tipo ```number```.

2. La interfaz ```Documentarie``` tiene cuatro propiedades: nombre que es de tipo ```string```, año que es de tipo ```number```, duracion que es de tipo ```number``` y topico que es de tipo ```string```.

3. La interfaz ```Movie``` tiene tres propiedades: nombre que es de tipo ```string```, año que es de tipo ```number``` y duracion que también es de tipo ```number```.

- Movies.ts:

```TypeScript
import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Movie } from "./Interfaces";

export class PeliculasCollection extends BasicStreamableCollection<Movie> {
    searchName = (name: string) => this.collection.filter((movie) => movie.nombre === name);

    searchYear = (year: number) => this.collection.filter((movie) => movie.año === year);

    searchDuration = (duration: number) => this.collection.filter((movie) => movie.duracion === duration);
}
```

Aquí exportamos la clase llamada ```PeliculasCollection``` que extiende de la clase ```BasicStreamableCollection``` y se especializa para trabajar con películas. La clase tiene tres métodos de búsqueda, ```searchName```, ```searchYear``` y ```searchDuration```, que toman un parámetro de búsqueda y devuelven una lista filtrada de películas que coinciden con ese parámetro. La búsqueda de ```searchName``` se realiza por el nombre de la película, la búsqueda de ```searchYear``` se realiza por el año de lanzamiento de la película y la búsqueda de ```searchDuration``` se realiza por la duración de la película.

- Series.ts:

```TypeScript
import { BasicStreamableCollection } from "./BasicStreamableCollection";
import { Serie } from "./Interfaces";

export class SeriesCollection extends BasicStreamableCollection<Serie> {
    constructor(collection: Serie[]) {
        super(collection);
    }

    searchName(name: string): Serie[] {
        const result = [];
        for (const serie of this.collection) {
            if (serie.nombre === name) {
                result.push(serie);
            }
        }
        return result;
    }

    searchYear(year: number): Serie[] {
        const result = [];
        for (const serie of this.collection) {
            if (serie.año === year) {
                result.push(serie);
            }
        }
        return result;
    }

    searchSeasons(seasons: number): Serie[] {
        const result = [];
        for (const serie of this.collection) {
            if (serie.temporadas === seasons) {
                result.push(serie);
            }
        }
        return result;
    }
}
```

Definimos una clase llamada ```SeriesCollection```. Esta clase extiende de una clase llamada ```BasicStreamableCollection``` que toma un tipo genérico de ```Serie```. La clase tiene un ```constructor``` que acepta una colección de ```Serie```.

Además, la clase tiene tres métodos de búsqueda que buscan ```Series``` en la colección por nombre, año y número de temporadas. Cada método devuelve una matriz de ```Serie``` que cumple con el criterio de búsqueda.


- Streamable.ts:

```TypeScript
export interface Streamable {
  searchYear(year: number): any[];
  searchName(name: string): any[];
}
```

Simplemente definimos la interfaz ```Streamable``` y le ponemos dos métodos: ```searchYear``` y ```searchName```. Ambos métodos toman un argumento y devuelven un array de cualquier tipo. 

- ```searchYear``` toma un número como argumento y devuelve un array de cualquier tipo.

- ```searchName``` toma una cadena como argumento y devuelve un array de cualquier tipo.

#### Comprobaciones

En cuanto a las pruebas unitarias, antes las tenía todas de manera conjunta, y ahora las he separado en distintos ficheros gracias a la recomendación del profesor de que se debería de tener la misma estructura tanto en el ```src/``` como en el ```tests/```, así que a continuación, muestro los dintintos ficheros ```.spec.ts```que se han realizado, que son pruebas con Mocha y Chai:

- Documentaries.spec.ts:

```TypeScript
import "mocha";
import { expect } from "chai";
import {DocumentalesCollection} from "../../src/ejercicio-1/Documentaries";


import "mocha";
import { expect } from "chai";
import {DocumentalesCollection} from "../../src/ejercicio-1/Documentaries";


describe("Documentaries", () => {
    it("searchDuration debería devolver un array de documentales la duración buscada", () => {
      const documentaries = [
        { nombre: "Cosmos", año: 2014, duracion: 500, topico: "Espacial" },
        { nombre: "No confíes en nadie", año: 2022, duracion: 100, topico: "Criptomonedas" },
        { nombre: "Osa Polar", año: 2020, duracion: 200, topico: "Animales" },
      ];
      const documentariesCollection = new DocumentalesCollection(documentaries);
      const result = documentariesCollection.searchDuration(100);
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "No confíes en nadie",
        año: 2022,
        duracion: 100,
        topico: "Criptomonedas",
      });
    });

    it("searchYear debería devolver un array de documentales que salieron en ese año", () => {
      const documentaries = [
        { nombre: "Cosmos", año: 2014, duracion: 500, topico: "Espacial" },
        { nombre: "No confíes en nadie", año: 2022, duracion: 100, topico: "Criptomonedas" },
        { nombre: "Osa Polar", año: 2020, duracion: 200, topico: "Animales" },
      ];
      const documentariesCollection = new DocumentalesCollection(documentaries);
      const result = documentariesCollection.searchYear(2022);
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "No confíes en nadie",
        año: 2022,
        duracion: 100,
        topico: "Criptomonedas",
      });
    });

    it("searchTopic debería devolver un array de documentales de ese tipo", () => {
        const documentaries = [
          { nombre: "Cosmos", año: 2014, duracion: 500, topico: "Espacial" },
          { nombre: "No confíes en nadie", año: 2022, duracion: 100, topico: "Criptomonedas" },
          { nombre: "Osa Polar", año: 2020, duracion: 200, topico: "Animales" },
        ];
        const documentariesCollection = new DocumentalesCollection(documentaries);
        const result = documentariesCollection.searchTopic("Criptomonedas");
        expect(result).to.have.lengthOf(1);
        expect(result[0]).to.deep.include({
          nombre: "No confíes en nadie",
          año: 2022,
          duracion: 100,
          topico: "Criptomonedas",
        });
    });
  });
```

- Movies.spec.ts:

```TypeScript
import "mocha";
import { expect } from "chai";
import {PeliculasCollection} from "../../src/ejercicio-1/Movies";


describe("Movies", () => {
    it("searchDuration debería devolver un array de películas con la duración buscada", () => {
      const movies = [
        { nombre: "Inception", año: 2010, duracion: 152 },
        { nombre: "The Godfather", año: 1972, duracion: 175 },
        { nombre: "The Dark Knight", año: 2018, duracion: 152 },
      ];
      const moviesCollection = new PeliculasCollection(movies);
      const result = moviesCollection.searchDuration(152);
      expect(result).to.have.lengthOf(2);
      expect(result[0]).to.deep.include({
        nombre: "Inception",
        año: 2010,
        duracion: 152,
      });
      expect(result[1]).to.deep.include({
        nombre: "The Dark Knight",
        año: 2018,
        duracion: 152,
      });
    });

    it("searchYear debería devolver un array con las películas que salieron ese año", () => {
      const peliculas = [
        { nombre: "The Dark Knight", año: 2018, duracion: 152 },
        { nombre: "Inception", año: 2010, duracion: 152 },
      ];
      const peliculasCollection = new PeliculasCollection(peliculas);
      const result = peliculasCollection.searchYear(2010);
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "Inception",
        año: 2010,
        duracion: 152,
      });
    });

    it("searchName debería devolver un array con las películas que tienen ese nombre", () => {
      const peliculas = [
        { nombre: "The Dark Knight", año: 2018, duracion: 152 },
        { nombre: "Inception", año: 2010, duracion: 152 },
      ];
      const peliculasCollection = new PeliculasCollection(peliculas);
      const result = peliculasCollection.searchName("Inception");
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "Inception",
        año: 2010,
        duracion: 152,
      });
    });
  });
```

- Series.spec.ts:

```TypeScript
import "mocha";
import { expect } from "chai";
import {SeriesCollection} from "../../src/ejercicio-1/Series";


describe("Series", () => {
    it("searchSeasons debería devolver un array de series que tengan ese número de temporadas", () => {
      const series = [
        { nombre: "You", año: 2018, temporadas: 4 },
        { nombre: "Dragon ball", año: 1985, temporadas: 20 },
        { nombre: "Friends", año: 1994, temporadas: 10 },
      ];
      const seriesCollection = new SeriesCollection(series);
      const result = seriesCollection.searchSeasons(20);
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "Dragon ball",
        año: 1985,
        temporadas: 20,
      });
    });

    it("searchName debería devolver un array de series que tengan el nombre buscado", () => {
      const series = [
        { nombre: "You", año: 2018, temporadas: 4 },
        { nombre: "Dragon ball", año: 1985, temporadas: 20 },
        { nombre: "Friends", año: 1994, temporadas: 10 },
      ];
      const seriesCollection = new SeriesCollection(series);
      const result = seriesCollection.searchName("Friends");
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "Friends",
        año: 1994,
        temporadas: 10,
      });
    });
  });
```

- Streamable.spec.ts

```TypeScript
import "mocha";
import { expect } from "chai";
import {SeriesCollection} from "../../src/ejercicio-1/Series";
import {DocumentalesCollection} from "../../src/ejercicio-1/Documentaries";


describe("Streamable", () => {
    it("searchYear debería devolver un array con las series del año buscado", () => {
      const series = [
        { nombre: "You", año: 2018, temporadas: 4 },
        { nombre: "Dragon ball", año: 1985, temporadas: 20 },
      ];
      const seriesCollection = new SeriesCollection(series);
      const result = seriesCollection.searchYear(1985);
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "Dragon ball",
        año: 1985,
        temporadas: 20,
      });
    });

    it("searchName debería devolver un array con los documentales que tengan ese nombre", () => {
      const documentaries = [
        { nombre: "Cosmos", año: 2014, duracion: 500, topico: "Espacial" },
        { nombre: "No confíes en nadie", año: 2022, duracion: 100, topico: "Criptomonedas" },
      ];
      const documentariesCollection = new DocumentalesCollection(documentaries);
      const result = documentariesCollection.searchName("No confíes en nadie");
      expect(result).to.have.lengthOf(1);
      expect(result[0]).to.deep.include({
        nombre: "No confíes en nadie",
        año: 2022,
        duracion: 100,
        topico: "Criptomonedas",
      });
    });
  });
```

Como podemos observar, todas las pruebas fueron superadas:

```Bash
  Documentaries
    ✔ searchDuration debería devolver un array de documentales la duración buscada
    ✔ searchYear debería devolver un array de documentales que salieron en ese año
    ✔ searchTopic debería devolver un array de documentales de ese tipo

  Movies
    ✔ searchDuration debería devolver un array de películas con la duración buscada
    ✔ searchYear debería devolver un array con las películas que salieron ese año
    ✔ searchName debería devolver un array con las películas que tienen ese nombre

  Series
    ✔ searchSeasons debería devolver un array de series que tengan ese número de temporadas
    ✔ searchName debería devolver un array de series que tengan el nombre buscado

  Streamable
    ✔ searchYear debería devolver un array con las series del año buscado
    ✔ searchName debería devolver un array con los documentales que tengan ese nombre

  10 passing (54ms)
```

Y también podemos comprobar gracias a que hemos utilizado Istanbul y Coveralls, cómo de cubierto tenemos nuestro código:

```TypeScript
-------------------------------|---------|----------|---------|---------|-------------------
File                           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------------------|---------|----------|---------|---------|-------------------                 
 ejercicio-1                   |     100 |      100 |     100 |     100 |                   
  BasicStreamableCollection.ts |     100 |      100 |     100 |     100 |                   
  Documentaries.ts             |     100 |      100 |     100 |     100 |                   
  Movies.ts                    |     100 |      100 |     100 |     100 |                   
  Series.ts                    |     100 |      100 |     100 |     100 | 
-------------------------------|---------|----------|---------|---------|-------------------
```

.
.
.
.
.

## _Ejercicio 2 - Implementación de una lista y sus operaciones_

### Enunciado:

En este ejercicio tendrá que implementar una clase genérica que modele una lista de elementos de cualquier tipo y sus operaciones sin hacer uso de ninguna de las funcionlidades proporcionadas por Array.prototype. Se permite, sin embargo, el uso de [].

Deberá incluir, al menos, las siguientes operaciones para trabajar con su lista:

Método append, el cual, dadas dos listas, permite añadir al final de la primera los elementos de la segunda.
Método concatenate, que dado un número variable de listas, combina todos sus elementos en una única lista que retorna.
Método filter, que dada una lista y un predicado lógico retorna una lista con todos los elementos de la lista inicial para los cuales el predicado lógico es verdadero.
Método length, que devuelve el número de elementos de la lista.
Método map, que dada una lista y una función, retorna la lista resultante de aplicar a cada elemento de la lista inicial la función.
Método reduce, que dada una lista, una función y un acumulador inicial, reduce cada elemento al acumulador utilizando la función.
Método reverse, el cual dada una lista, retorna una lista con los elementos originales pero en orden inverso.
Método forEach, que dada una lista y una función, permite iterar en los elementos de la lista e invocar la función con cada uno de ellos.
Instancie diferentes listas que contengan elementos de diferentes tipos y lleve a cabo pruebas suficientes con cada una de las listas definidas para comprobar la generalidad de la clase diseñada.

#### Código


```TypeScript
export class Lista<T> {
  private elementos: T[];

  constructor(...elementos: T[]) {
    this.elementos = elementos;
  }

  append(lista: Lista<T>): void {
    this.elementos.push(...lista.toArray());
  }

  concatenate(...listas: Lista<T>[]): Lista<T> {
    const nuevaLista = new Lista<T>(...this.elementos);
    for (const lista of listas) {
      nuevaLista.append(lista);
    }
    return nuevaLista;
  }

  filter(predicado: (elemento: T) => boolean): Lista<T> {
    const nuevaLista = new Lista<T>();
    for (const elemento of this.elementos) {
      if (predicado(elemento)) {
        nuevaLista.append(new Lista(elemento));
      }
    }
    return nuevaLista;
  }

  length(): number {
    return this.elementos.length;
  }

  map<U>(transformador: (elemento: T) => U): Lista<U> {
    const nuevaLista = new Lista<U>();
    for (const elemento of this.elementos) {
      nuevaLista.append(new Lista(transformador(elemento)));
    }
    return nuevaLista;
  }

  reduce<U>(fn: (acumulador: U, elemento: T) => U, acumulador: U): U {
    let resultado: U = acumulador;
    for (const elemento of this.elementos) {
      resultado = fn(resultado, elemento);
    }
    return resultado;
}

  reverse(): Lista<T> {
    const nuevaLista = new Lista<T>();
    for (let i = this.elementos.length - 1; i >= 0; i--) {
      nuevaLista.append(new Lista(this.elementos[i]));
    }
    return nuevaLista;
  }

  forEach(funcion: (elemento: T) => void): void {
    for (const elemento of this.elementos) {
      funcion(elemento);
    }
  }

  toArray(): T[] {
    return this.elementos;
  }
}
```

Para este ejercicio, definimos una clase ```Lista<T>``` que es una implementación de una lista genérica como se nos pide en el enunciado. Los métodos incluyen que tenemos son:

-```append``` para agregar elementos a la lista.
-```concatenate``` para concatenar varias listas.
-```filter``` para filtrar la lista según un predicado.
-```length``` para obtener la longitud de la lista.
-```map``` para transformar cada elemento de la lista
-```reduce``` para reducir la lista a un solo valor.
-```reverse``` para invertir el orden de los elementos en la lista.
-```forEach``` para ejecutar una función en cada elemento de la lista.
-```toArray``` para obtener un arreglo de los elementos en la lista.

La clase utiliza un tipo genérico ```T``` que se utiliza en la definición de los métodos y en la definición del arreglo elementos que almacena los elementos de la lista. El ```constructor``` de la clase acepta un número variable de argumentos de tipo ```T```, que se utilizan para inicializar la lista. La mayoría de los métodos crean y devuelven una nueva instancia de ```Lista<T>``` para guardar sin modificar la lista original.


#### Comprobaciones

Se han realizado pruebas con Mocha y Chai. A continuación veremos el fichero ```.spec.ts```que hemos creado para este ejercicio:

```TypeScript
import "mocha";
import { expect } from "chai";
import { Lista } from "../../src/ejercicio-2/Lista";

describe("Lista", () => {
  it("debería crear una lista vacía", () => {
    const lista = new Lista();
    expect(lista.length()).to.equal(0);
  });

  it("debería crear una lista con elementos", () => {
    const lista = new Lista("hola", "mundo");
    expect(lista.length()).to.equal(2);
    expect(lista.toArray()).to.deep.equal(["hola", "mundo"]);
  });

  it("debería agregar elementos al final de la lista", () => {
    const lista = new Lista(1, 2);
    lista.append(new Lista(3, 4));
    expect(lista.toArray()).to.deep.equal([1, 2, 3, 4]);
  });

  it("debería concatenar varias listas en una sola lista", () => {
    const lista1 = new Lista(1, 2);
    const lista2 = new Lista(3, 4);
    const lista3 = new Lista(5, 6);
    const lista4 = lista1.concatenate(lista2, lista3);
    expect(lista4.toArray()).to.deep.equal([1, 2, 3, 4, 5, 6]);
  });

  it("debería filtrar los elementos de la lista", () => {
    const lista = new Lista(1, 2, 3, 4, 5);
    const numerosPares = lista.filter((n) => n % 2 === 0);
    expect(numerosPares.toArray()).to.deep.equal([2, 4]);
  });

  it("debería mapear los elementos de la lista", () => {
    const lista = new Lista(1, 2, 3, 4, 5);
    const numerosDuplicados = lista.map((n) => n * 2);
    expect(numerosDuplicados.toArray()).to.deep.equal([2, 4, 6, 8, 10]);
  });

  it("debería reducir los elementos de la lista", () => {
    const lista = new Lista(1, 2, 3, 4, 5);
    const sumaNumeros = lista.reduce((acumulador, n) => acumulador + n, 0);
    expect(sumaNumeros).to.equal(15);
  });

  it("debería invertir los elementos de la lista", () => {
    const lista = new Lista(1, 2, 3, 4, 5);
    const numerosInversos = lista.reverse();
    expect(numerosInversos.toArray()).to.deep.equal([5, 4, 3, 2, 1]);
  });

  it("debería iterar sobre los elementos de la lista y ejecutar la función de callback en cada uno", () => {
    const lista = new Lista<number>(1, 2, 3);
    const elementos: number[] = [];
    lista.forEach((n) => elementos.push(n * 2));
    expect(elementos).to.deep.equal([2, 4, 6]);
  });

  it("debería devolver un array vacío si se aplica filter a una lista vacía", () => {
    const lista = new Lista<number>();
    const listaFiltrada = lista.filter((n: number) => n % 2 === 0);
    expect(listaFiltrada.toArray()).to.deep.equal([]);
  });
});
```

Como podemos observar, todas las pruebas fueron superadas:

```Bash
  Lista
    ✔ debería crear una lista vacía
    ✔ debería crear una lista con elementos
    ✔ debería agregar elementos al final de la lista
    ✔ debería concatenar varias listas en una sola lista
    ✔ debería filtrar los elementos de la lista
    ✔ debería mapear los elementos de la lista
    ✔ debería reducir los elementos de la lista
    ✔ debería invertir los elementos de la lista
    ✔ debería iterar sobre los elementos de la lista y ejecutar la función de callback en cada uno
    ✔ debería devolver un array vacío si se aplica filter a una lista vacía

  10 passing
```

Y también podemos comprobar gracias a que hemos utilizado Istanbul y Coveralls, cómo de cubierto tenemos nuestro código:

```TypeScript
-------------------------------|---------|----------|---------|---------|-------------------
File                           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------------------|---------|----------|---------|---------|-------------------                  
 ejercicio-2                   |     100 |      100 |     100 |     100 |                   
  Lista.ts                     |     100 |      100 |     100 |     100 |                   
-------------------------------|---------|----------|---------|---------|-------------------
```

.
.
.
.
.


## _Ejercicio 3 - Ampliando la biblioteca musical_

### Enunciado:

Teniendo en cuenta el ejercicio de la biblioteca musical implementado en la práctica 5, mejore su diseño tratando de cumplir todos los principios SOLID si es que aún no los cumple.

Luego, trate de introducir las siguientes modificaciones a su diseño:

Ahora, la discografía de un artista podrá estar formada por una colección de discos o de singles. Por lo tanto, tendrá que contemplar la nueva entidad single. Generalmente, un single se diferencia de un disco en que el single contiene una única canción o varias versiones de la misma canción.

Además, ahora deberá hacer que la discografía sea una clase genérica. En algún punto de su código deberá concretar esta clase genérica indicando que la discografía puede ser una colección de discos, una colección de singles o una colección de discos y singles.


#### Código

Han habido numerosas complicaciones debido a que el código de la entrega 5 no era y no estaba implementado de la mejor manera posible, después de haber llevado a cabo 3 posibles soluciones, y de intentar adaptar la que ya tenía, decidí que llegados a ese punto que lo mejor era empezar el ejercicio de 0, y finalmente este es el resultado.


``` TypeScript

```




#### Comprobaciones




```TypeScript

```


```bash

```

.
.
.
.
.


## _Ejercicio 1 - PE103_

### Enunciado:

Implemente una interfaz genérica 'Collectable' con los siguientes métodos, los cuales deberá definir toda clase que quiera implementar dicha interfaz: addItem, getItem, removeItem, getNumberOfItems.

Implemente una interfaz genérica 'Searchable' con los siguientes métodos, los cuales deberá definir toda clase que desee implementar dicha interfaz: search. Este método recibirá un término de búsqueda cuyo tipo no se conoce a priori.

Implemente una clase abstracta genérica 'SearchableCollection' que implemente las interfaces genéricas 'Collectable' y 'Searchable'. Tenga en cuenta que en este punto deberá implementar todos los metodos de la interfaz 'Collectable', mientras que el método search de 'Searchable' será abstracto, de modo que aquellas clases que extiendan a 'SearchableCollection' tengan que implementarlo obligatoriamente.

Extienda la clase abstracta genérica 'SearchableCollection' escribiendo dos subclases: 'NumericSearchableCollection' y 'StringSearchableCollection'. La primera deberá modelar una colección de elementos numéricos en la que el método search deberá poder buscar un número concreto y devolverá un array con todas las ocurrencias de dicho número en la colección. La segunda deberá modelar una colección de cadenas de caracteres en la que el método search deberá poder buscar una subcadena y devolverá un array con todas las cadenas de la colección que contengan dicha subcadena.

Pruebe el correcto funcionamiento de las clases 'NumericSearchableCollection' y 'StringSearchableCollection'. Esto debería haberlo hecho ya si ha utilizado TDD/BDD durante su desarrollo.


#### Código


Como había que separar por interfaces y clases, hemos acabado con 5 ficheros:

- Collectable.ts:

``` TypeScript
export interface Collectable<T> {

    addItem(item: T): void;
  
    getItem(index: number): T | undefined;
  
    removeItem(index: number): void;
  
    getNumberOfItems(): number;
  }
```

Este código define una interfaz genérica ```Collectable<T>``` que describe una colección de elementos que se pueden agregar, obtener y eliminar. La interfaz tiene cuatro métodos:

- ```addItem(item: T)```: agrega un elemento item a la colección.

-```getItem(index: number)```: devuelve el elemento en el índice index.

-```removeItem(index: number)```: elimina el elemento en el índice index.

-```getNumberOfItems()```: devuelve el número de elementos en la colección.

La interfaz utiliza un tipo genérico ```T``` que especifica el tipo de elemento que se almacena en la colección. Esto permite que la interfaz se utilice con diferentes tipos de elementos. Por ejemplo, se podría crear una implementación de la interfaz ```Collectable``` para una colección de canciones o para una colección de artistas.

- Searchable.ts:

```TypeScript
export interface Searchable<T> {

    search(term: T): T[];
  }
```

Se define una interfaz genérica llamada ```Searchable<T>```. La interfaz tiene un método ```search()``` que toma un argumento ```term``` de tipo ```T``` y devuelve un array de objetos de tipo ```T``` que coinciden con el término de búsqueda especificado. Podríamos decir que esta interfaz puede ser implementada por cualquier clase que sea capaz de realizar una búsqueda y devolver los resultados en un array del mismo tipo. El uso de una interfaz genérica permite que esta misma interfaz sea utilizada con diferentes tipos de objetos, proporcionando una mayor flexibilidad y reutilización de código.

- SearchableCollection.ts:

```TypeScript
import { Collectable } from './Collectable';
import { Searchable } from './Searchable';


export abstract class SearchableCollection<T> implements Collectable<T>, Searchable<T> {
  protected items: T[] = [];

  abstract search(term: unknown): T[];

  addItem(item: T): void {
    this.items.push(item);
  }

  getItem(index: number): T | undefined {
    return this.items[index];
  }

  removeItem(index: number): T | undefined {
    if (index < 0 || index >= this.items.length) {
      return undefined;
    }
    return this.items.splice(index, 1)[0];
  }

  getNumberOfItems(): number {
    return this.items.length;
  }
}
```

La clase abstracta ```SearchableCollection``` es una colección de elementos que pueden ser buscados y manipulados. Define los métodos para agregar, obtener y eliminar elementos, y un método abstracto ```search()``` para realizar búsquedas en la colección. Se utiliza como base para definir colecciones específicas de elementos.

- NumericSearchableCollection.ts:

```TypeScript
import { SearchableCollection } from './SearchableCollection';

export class NumericSearchableCollection extends SearchableCollection<number> {

  private collection: number[] = [];

  constructor() {
    super();
  }

  addItem(item: number): void {
    this.collection.push(item);
  }

  getItem(index: number): number | undefined {
    return this.collection[index];
  }

  removeItem(index: number): number {
    return this.collection.splice(index, 1)[0];
  }

  getNumberOfItems(): number {
    return this.collection.length;
  }

  search(term: number): number[] {
    return this.collection.filter((item) => item === term);
  }
}
```

Este código define una clase llamada ```NumericSearchableCollection``` que representa una colección de números que se puede buscar. La clase tiene varios métodos para agregar, obtener y eliminar elementos de la colección, y también tiene un método ```search()``` que busca un número en la colección y devuelve un array con los números que coinciden con el término de búsqueda. La clase utiliza un array privado llamado ```collection``` para almacenar los números de la colección.

- StringSearchableCollection.ts:

```TypeScript
import { SearchableCollection } from './SearchableCollection';


export class StringSearchableCollection extends SearchableCollection<string> {

  private collection: string[] = [];


  constructor() {
    super();
  }

  addItem(item: string): void {
    this.collection.push(item);
  }

  getItem(index: number): string | undefined {
    return this.collection[index];
  }

  removeItem(index: number): string {
    return this.collection.splice(index, 1)[0];
  }

  getNumberOfItems(): number {
    return this.collection.length;
  }

  search(term: string): string[] {
    return this.collection.filter((item) => item.includes(term));
  }
}
```

El código define una clase llamada ```StringSearchableCollection``` que hereda de otra clase llamada ```SearchableCollection``` y se utiliza para almacenar y buscar cadenas de caracteres. Proporciona métodos para agregar, obtener, eliminar y buscar elementos en la colección.

#### Comprobaciones

Se han realizado pruebas con Mocha y Chai. A continuación veremos el fichero ```.spec.ts```que hemos creado para este ejercicio:

- NumericSearchableCollection.spec.ts:

```TypeScript
import 'mocha';
import { expect } from 'chai';
import { NumericSearchableCollection } from '../../src/ejercicio-PE103-1/NumericSearchableCollection';


describe("NumericSearchableCollection", () => {
    let collection: NumericSearchableCollection;
  
    beforeEach(() => {
      collection = new NumericSearchableCollection();
      collection.addItem(1);
      collection.addItem(2);
      collection.addItem(3);
      collection.addItem(2);
    });
  
    it("la búsqueda debería devolver un array de numeros que coincidan con las búsqueda", () => {
      expect(collection.search(2)).to.eql([2, 2]);
    });
  
    it("la búsqueda debería devolver un array vacío si no hay numeros que coincidan con la búsqueda", () => {
      expect(collection.search(4)).to.eql([]);
    });
  });


  describe('NumericSearchableCollection', () => {
    let collection: NumericSearchableCollection;
  
    beforeEach(() => {
      collection = new NumericSearchableCollection();
    });

  describe('addItem', () => {
    it('debe agregar un número a la colección', () => {
      collection.addItem(1);
      expect(collection.getNumberOfItems()).to.equal(1);
    });
  });

  describe('getItem', () => {
    it('debe devolver el número en el índice especificado', () => {
      collection.addItem(1);
      expect(collection.getItem(0)).to.equal(1);
    });

    it('debería devolver indefinido si el índice está fuera de los límites', () => {
      expect(collection.getItem(0)).to.be.undefined;
    });
  });

  describe('removeItem', () => {
    it('debe eliminar el número en el índice especificado', () => {
      collection.addItem(1);
      collection.removeItem(0);
      expect(collection.getNumberOfItems()).to.equal(0);
    });

    it('debe devolver el número eliminado', () => {
      collection.addItem(1);
      expect(collection.removeItem(0)).to.equal(1);
    });
  });

  describe('getNumberOfItems', () => {
    it('debe devolver el número de artículos en la colección', () => {
      collection.addItem(1);
      collection.addItem(2);
      expect(collection.getNumberOfItems()).to.equal(2);
    });
  });

  describe('search', () => {
    it('debe devolver una serie de números que coincidan con el término de búsqueda', () => {
      collection.addItem(1);
      collection.addItem(2);
      collection.addItem(3);
      collection.addItem(2);
      expect(collection.search(2)).to.deep.equal([2, 2]);
    });

    it('debería devolver una matriz vacía si ningún número coincide con el término de búsqueda', () => {
      collection.addItem(1);
      collection.addItem(2);
      collection.addItem(3);
      expect(collection.search(4)).to.be.an('array').that.is.empty;
    });
  });
});
```

- StringSearchableCollection.spec.ts:

```TypeScript
import 'mocha';
import { expect } from 'chai';
import { StringSearchableCollection } from '../../src/ejercicio-PE103-1/StringSearchableCollection';


describe("StringSearchableCollection", () => {
  let collection: StringSearchableCollection;

  beforeEach(() => {
    collection = new StringSearchableCollection();
    collection.addItem("hello");
    collection.addItem("world");
    collection.addItem("foo");
    collection.addItem("bar");
  });

  it("debería devolver un array de strings que contengan el término buscado", () => {
    expect(collection.search("o")).to.eql(["hello", "world", "foo"]);
  });

  it("debería devolver un array vacío si no hay ningún string que contenga el término de búsqueda", () => {
    expect(collection.search("z")).to.eql([]);
  });
});

describe('StringSearchableCollection', () => {
    let collection: StringSearchableCollection;
  
    beforeEach(() => {
      collection = new StringSearchableCollection();
    });
  
    it('debería agregar elementos a la colección', () => {
      collection.addItem('hola');
      collection.addItem('adiós');
      expect(collection.getNumberOfItems()).to.equal(2);
    });
  
    it('debería obtener elementos de la colección', () => {
      collection.addItem('hola');
      collection.addItem('adiós');
      expect(collection.getItem(0)).to.equal('hola');
      expect(collection.getItem(1)).to.equal('adiós');
      expect(collection.getItem(2)).to.be.undefined;
    });
  
    it('debería eliminar elementos de la colección', () => {
      collection.addItem('hola');
      collection.addItem('adiós');
      collection.removeItem(0);
      expect(collection.getNumberOfItems()).to.equal(1);
      expect(collection.getItem(0)).to.equal('adiós');
    });
  
    it('debería devolver un array vacío si la colección está vacía', () => {
      expect(collection.search('hola')).to.deep.equal([]);
    });
  });
```

Como podemos observar, todas las pruebas fueron superadas:

```bash
  NumericSearchableCollection
    ✔ la búsqueda debería devolver un array de numeros que coincidan con las búsqueda
    ✔ la búsqueda debería devolver un array vacío si no hay numeros que coincidan con la búsqueda

  NumericSearchableCollection
    addItem
      ✔ debe agregar un número a la colección
    getItem
      ✔ debe devolver el número en el índice especificado
      ✔ debería devolver indefinido si el índice está fuera de los límites
    removeItem
      ✔ debe eliminar el número en el índice especificado
      ✔ debe devolver el número eliminado
    getNumberOfItems
      ✔ debe devolver el número de artículos en la colección
    search
      ✔ debe devolver una serie de números que coincidan con el término de búsqueda
      ✔ debería devolver una matriz vacía si ningún número coincide con el término de búsqueda

  StringSearchableCollection
    ✔ debería devolver un array de strings que contengan el término buscado
    ✔ debería devolver un array vacío si no hay ningún string que contenga el término de búsqueda

  StringSearchableCollection
    ✔ debería agregar elementos a la colección
    ✔ debería obtener elementos de la colección
    ✔ debería eliminar elementos de la colección
    ✔ debería devolver un array vacío si la colección está vacía


  16 passing (46ms)
```

Y también podemos comprobar gracias a que hemos utilizado Istanbul y Coveralls, cómo de cubierto tenemos nuestro código, y vemos que los dos fichero sobre los que hemos realizado las pruebas están cubiertos:

```TypeScript
---------------------------------|---------|----------|---------|---------|-------------------
File                             | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------------------------|---------|----------|---------|---------|-------------------

 ejercicio-PE103-1               |   78.57 |        0 |   77.77 |   76.92 |                   
  NumericSearchableCollection.ts |     100 |      100 |     100 |     100 |                   
  SearchableCollection.ts        |      25 |        0 |       0 |      25 | 24-53             
  StringSearchableCollection.ts  |     100 |      100 |     100 |     100 |                   
---------------------------------|---------|----------|---------|---------|-------------------
```

.
.
.
.
.



## Elementos Bibliográficos:

- Principios SOLID, https://profile.es/blog/principios-solid-desarrollo-software-calidad/.

- Guión de la Práctica 6, https://ull-esit-inf-dsi-2223.github.io/prct06-generics-solid/ .

- Guia de TypeDoc, https://typedoc.org/guides/installation/ .

- Comentarios en TypeDoc, https://typedoc.org/guides/doccomments/ .

- Guía sobre Mocha, https://mochajs.org/#getting-started .

- Guía sobre Chai, https://www.chaijs.com/guide/ .

- Guía Istanbul, https://istanbul.js.org/docs/tutorials/typescript/ .

- Sobre un warning en particular de TypeDoc, https://github.com/TypeStrong/typedoc/issues/1739 .

- Adam Freeman - Essential TypeScript 4: From Beginner to ProURL,https://www.oreilly.com/library/view/essential-typescript-4/9781484270110/html/Part_1.xhtml .

- Basic writing and formatting syntax, https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax .

- Video sobre Instanbul y Coveralls, https://drive.google.com/file/d/1xLDc4CpoYpsAlCFO_4DMwu7MKCtcZDnh/view .


## Conclusiones

Estos ejercicios han sido bastante entretenidos, sobre todo el segundo, tanto para probar cosas como para aprender e incluso divertirnos a través de ese aprendizaje. En este caso gracias a estos ejercicios hemos aprendido más sobre clases e interfaces genéricas, también teniendo en cuenta los principios SOLID, y también haciendo uso de Instanbul Y Coveralls, que acaban siendo bastante útiles para ir haciendo un seguimiento de nuestros pryectos.

Por otra parte, al empezar a trabajar con Coveralls e Istanbul me hue vuelto a sorprender ya que al comienzo de la asignatura pensaba que simplemente con ```console.log``` se podían llevar a cabo todas las comprobaciones necesarios sin que se me pasara nada por alto, sin embargo al empezar a hacer pruebas unitarias con Mocha y Chai me di cuenta de que estaba claramente equivocado. Y una vez ya sorprendido con lo bien que vienen esas pruebas en comparación con los simples ```console.log```, nos encontramos con Coveralls e Istanbul, que son ideales para cumplimentar tus pruebas al máximo con el fin de hacer el mejor seguimiento y cubrimiento posible a tu código.
