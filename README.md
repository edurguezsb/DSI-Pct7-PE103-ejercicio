# Práctica 4

En esta actividad, la Práctica 5 de la asignatura, se nos plantean varios problemas de programación que nos ayudarán a conocer más en profundidad objetos, clases e interfaces en TypeScript.
A continuación se mostrarán las soluciones para los problemas mencionados anteriormente, acompañados de explicaciones y comentarios que faciliten su comprensión.

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

``` TypeScript

```


#### Comprobaciones

Hemos hecho las siguientes comprobaciones con console.log():

``` TypeScript

```

Cuyos resultados son:

```bash

```

Y también se han realizado pruebas con Mocha y Chai. A continuación veremos el fichero ```.spec.ts```que hemos creado para este ejercicio:

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

``` TypeScript

```




#### Comprobaciones

Hemos hecho las siguientes comprobaciones con console.log():

``` TypeScript

```

Cuyos resultados son:

```bash

```

Y también se han realizado pruebas con Mocha y Chai. A continuación veremos el fichero ```.spec.ts```que hemos creado para este ejercicio:

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


## _Ejercicio 1 - PE103_

### Enunciado:



#### Código

``` TypeScript

```



#### Comprobaciones

Hemos hecho las siguientes comprobaciones con console.log():

``` TypeScript

```

Cuyos resultados son:

```bash

```

Y también se han realizado pruebas con Mocha y Chai. A continuación veremos el fichero ```.spec.ts```que hemos creado para este ejercicio:

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


## _Ejercicio 2 - PE103_

### Enunciado:



#### Código

``` TypeScript

```



#### Comprobaciones

Hemos hecho las siguientes comprobaciones con console.log():

``` TypeScript

```

Cuyos resultados son:

```bash

```

Y también se han realizado pruebas con Mocha y Chai. A continuación veremos el fichero ```.spec.ts```que hemos creado para este ejercicio:

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



## Elementos Bibliográficos:

- Guión de la Práctica 4, https://ull-esit-inf-dsi-2223.github.io/prct04-arrays-tuples-enums/ .

- Guia de TypeDoc, https://typedoc.org/guides/installation/ .

- Comentarios en TypeDoc, https://typedoc.org/guides/doccomments/ .

- Guía sobre Mocha, https://mochajs.org/#getting-started .

- Guía sobre Chai, https://www.chaijs.com/guide/ .

- Vídeo de ejemplo de instalación y configuración de TypeDoc en un proyecto TypeScript, https://drive.google.com/file/d/19LLLCuWg7u0TjjKz9q8ZhOXgbrKtPUme/view .

- Vídeo de ejemplo de instalación y configuración de Mocha y Chai en un proyecto TypeScript, https://drive.google.com/file/d/1-z1oNOZP70WBDyhaaUijjHvFtqd6eAmJ/view .

- Sobre un warning en particular, https://github.com/TypeStrong/typedoc/issues/1966 .

- Adam Freeman - Essential TypeScript 4: From Beginner to ProURL,https://www.oreilly.com/library/view/essential-typescript-4/9781484270110/html/Part_1.xhtml .

- Basic writing and formatting syntax, https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax .




## Conclusiones

Ejercicios bastante entretenidos para probar cosas al igual que en la práctica 3, sobretodo sirven para  ir aprendiendo y conociendo nuevos métodos de los tipos de datos. En este caso gracias a estos ejercicios hemos aprendido y mejorado en cuanto a conocer más en profundidad los arrays, tuplas y enumerados. 

También hay que destacar que hemos aprendido nociones básicas de TypeDoc para poder generar documentación muy útil de una manera muy sencilla realmente. Por otra parte podríamos decir que lo más complejo esta vez ha sido empezar a hacer tests con Mocha y la librería Chai, pero es cuestión de ir probando cosas, que a base de errores también se aprende.

Además, estas pruebas realizadas de manera exclusiva para cada ejercicio, al principio las ves como algo absurdo porque piensas (o al menos en mi caso) que son lo mismo que los ```console.log()```, pero luego te das cuenta de que te permiten probar la eficacia de tu código y su funcionalidad de una manera más "concentrada".