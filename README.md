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


``` TypeScript

```




```TypeScript

```



```TypeScript

```



```TypeScript

````



```TypeScript

```




#### Comprobaciones



Se han realizado pruebas con Mocha y Chai. A continuación veremos el fichero ```.spec.ts```que hemos creado para este ejercicio:




```TypeScript

```




```TypeScript

```



```TypeScript

```



```TypeScript

```

Y como vemos, todas las pruebas propuestas son pasadas:

```bash

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



```TypeScript

```



#### Comprobaciones



```TypeScript

```


```bash

```



```TypeScript

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



#### Código

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

Por otra parte, al empezar a trabajar con Coveralls e Istanbul me hue vuelto a sorprender ya que al comienzo de la asignatura pensaba que simplemente con ```console.log``` se podían llevar a cabo todas las comprobaciones necesarios sin que se me pasara nada por alto, sin embargo al empezar a hacer pruebas unitarias con Mocha y Chai me di cuenta de que estaba claramente equivocado. Y una vez ya sorprendido con lo bien que vienen esas pruebas en comparación con los simples ```console.log```, nos encontramos con Coveralls e Istanbul, que son ideales para cumplimentar tus pruebas al máximo con el fin de hacer el mejor seguimiento posible a tu código.
