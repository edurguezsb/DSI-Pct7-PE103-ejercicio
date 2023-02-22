# Práctica 4

En esta actividad, la Práctica 4 de la asignatura, se nos plantean varios problemas de programación que nos ayudarán a conocer más en profundidad los arrays, tuplas y enumerados de TypeScript.
A continuación se mostrarán las soluciones para los problemas mencionados anteriormente, acompañados de explicaciones y comentarios que faciliten su comprendimiento.


## _Ejercicio 1 - El alergólogo_

### Enunciado:

Una prueba de alérgenos produce un valor numérico (entero positivo) único, el cual contiene información sobre las alergias de una persona. La lista de posibles alérgenos es la siguiente:

Huevo (1)
Cacahuete (2)
Marisco (4)
Fresa (8)
Tomate (16)
Chocolate (32)
Polen (64)
Gato (128)
Por ejemplo, si alguien fuera alérgico a los gatos y al tomate, obtendría una puntuación igual a 128 + 16 = 144.

Escriba una función getAllergens que reciba una puntuación de alérgenos de una persona y que devuelva una lista con los alérgenos a los que la persona es alérgica. Los diferentes alérgenos deberán modelarse mediante un enumerado.

Por último, tenga en cuenta que la función podría recibir una puntuación que incluya alérgenos no contemplados en la lista, esto es, alérgenos cuya puntuación sea 256, 512, 1024, etc. Además, si el valor pasado como argumento no es entero y positivo, la función deberá retornar el valor undefined.

#### Código

``` TypeScript
```

#### Comprobaciones

``` TypeScript
```



## _Ejercicio 2 - Números complejos_

### Enunciado:

Con lo visto hasta ahora en la asignatura, defina un tipo de datos propio que permita representar un número complejo, esto es, pares de valores numéricos reales, donde la primera componente del par es la parte real del complejo, mientras que la segunda componente del par representa su parte imaginaria.

A continuación, partiendo de dicha definición, escriba funciones que permitan calcular las siguientes operaciones sobre números complejos:

Suma, resta, multiplicación y división (funciones add, sub, mult y div). Estas funciones reciben como argumentos dos complejos y devuelven un complejo.
Producto escalar (función prod). Esta función recibe como argumentos un complejo y un número real, retornando un número complejo.
Conjugado (función conj). Recibe como argumento un complejo y devuelve otro complejo.
Módulo (función abs). La función recibe como argumento un complejo y retorna un valor real.

#### Código

``` TypeScript
```

#### Comprobaciones

``` TypeScript
```



## _Ejercicio 3 - No cabrees a la reina_

### Enunciado:

Dadas las posiciones de dos reinas en un tablero de ajedrez, determine si ambas reinas podrían atacarse en caso de cabrearse una con la otra. En el ajedrez, una reina puede atacar piezas ubicadas en la misma fila, columna o diagonal.

Un tablero de ajedrez puede representarse mediante un array bidimensional de 8 x 8 casillas. Por lo tanto, si la reina negra está ubicada en la posición (1, 3), mientras que la reina blanca está ubicada en la posición (3, 5), tendríamos una estructura de datos como la que sigue:

[
    [-, -, -, -, -, -, -, -]
    [-, -, -, N, -, -, -, -]
    [-, -, -, -, -, -, -, -]
    [-, -, -, -, -, B, -, -]
    [-, -, -, -, -, -, -, -]
    [-, -, -, -, -, -, -, -]
    [-, -, -, -, -, -, -, -]
    [-, -, -, -, -, -, -, -]
]
Escriba una función checkAtack que, dada una estructura de datos como la anterior, devuelva un valor lógico indicando si ambas reinas podrían atacarse dadas las posiciones de las mismas. Tenga en cuenta que solo puede haber una reina blanca y una reina negra en el tablero. En caso de que lo anterior no suceda, la función deberá devolver el valor undefined.

Por último, el tablero debe consistir en, exactamente, 8 filas y 8 columnas, donde cada casilla puede contener alguno de los valores -, N o B, exclusivamente. Aunque la anterior comprobación podría llevarse a cabo a través del código fuente incluido en la función (en tiempo de ejecución), defina un tipo de datos adecuado que impida, desde el punto de vista del tipado (en tiempo de compilación), pasarle a la función checkAtack un tablero no válido, esto es, con un número de filas/columnas diferente a 8 y/o celdas con valores no válidos).

#### Código

``` TypeScript
```

#### Comprobaciones

``` TypeScript
```



## _Ejercicio 4 - Reimplementando la función ```map```_

### Enunciado:

Implemente una función que emule el comportamiento de la función map proporcionada por el lenguaje sin hacer uso esta última. La función map actúa sobre una colección de elementos, modificando el valor de cada uno de ellos en base a un callback que se le pasa como argumento.

Teniendo en cuenta lo anterior, escriba una función myMap que reciba una colección (array) de valores numéricos como primer argumento, además de un callback que permita modificar cada elemento de la colección como segundo argumento. La función deberá devolver la colección modificada.

#### Código

``` TypeScript
```

#### Comprobaciones

``` TypeScript
```



## _Ejercicio 5 - Matrices espirales_

### Enunciado:

Escriba una función getSpiralMatrix que, dado un entero positivo n representando el tamaño de una matriz cuadrada, devuelva una matriz (array bidimensional) con todos los números enteros en el rango [1, n*n] y que estén dispuestos en la matriz conformando una espiral. La espiral debe comenzar en la primera fila y columna de la matriz e irse completando siguiendo las agujas del reloj.

#### Código

``` TypeScript
```

#### Comprobaciones

``` TypeScript
```



## _Ejercicio 6 - Compresión de números en rangos_

### Enunciado:

Escriba una función fromArrayToRanges que reciba un array o lista de números enteros y los comprima en rangos, es decir, que devuelva una cadena de caracteres con la compresión obtenida. Un rango, es decir, un conjunto de números consecutivos se representará mediante una cadena de caracteres con el primer y último número del rango separado por un guión bajo (_). Un rango de un único número será la cadena de caracteres que representa a ese ùnico número. Luego, una serie de rangos vendrá separada por comas (,).
Ejemplos:

[5, 6, 7, 9, 12, 13, 14] => “5_7, 9, 12_14”
[-3, -2, -1, 3, 5, 6, 7] => “-3_-1, 3, 5_7”
[17] => “17”
[3, 5, 6, 7, 9, 10] => “3, 5_7, 9_10”


Escriba una función fromRangesToArray que lleve a cabo la operación inversa, es decir, que reciba como argumento una cadena de caracteres representando una serie de rangos y devuelva el array de números correspondiente.

#### Código

``` TypeScript
```

#### Comprobaciones

``` TypeScript
```



## _Ejercicio 7 - Decodificar resistencias_

### Enunciado:

Si desea realizar algún proyecto usando una Raspberry Pi, probablemente necesitará usar resistencias. Para este ejercicio necesita conocer dos cosas sobre las resistencias:

Cada resistor o resistencia tiene un valor de resistencia en Ohmios asociado. Además, las resistencias son tan pequeñas que si se les imprimiera el valor en ellas, sería muy difícil de leer. Para resolver este problema, los fabricantes siguen un estándar de bandas codificadas de colores para indicar sus valores de resistencia. Cada banda tiene una posición y un valor numérico.

Las primeras dos bandas de una resistencia tienen un esquema de codificación muy simple: cada color se mapea a un único número. Por ejemplo, si una resistencia tiene impresa una banda marrón (valor 1) seguida de una banda verde (valor 5), el valor de la resistencia se traduciría al número 15.

El objetivo de este ejercicio es crear un programa que nos ayude a calcular el valor de una resistencia sin tener que memorizar los valores de las bandas. Para ello, cree una función decodeResistor que recibe como parámetros los nombres de los colores de una resistencia como entrada y devuelve un número de dos dígitos indicando el valor de la resistencia. La función deberá devover un número de dos dígitos incluso si recibe más de dos colores como parámetros.

Las bandas de colores están codificadas de la siguiente manera:

Negro: 0
Marrón: 1
Rojo: 2
Naranja: 3
Amarillo: 4
Verde: 5
Azul: 6
Violeta: 7
Gris: 8
Blanco: 9
De este modo, la combinación Marrón-Verde debería devolver 15 al igual que Marrón-Verde-Violeta ignorando el tercer color.

#### Código

``` TypeScript
```

#### Comprobaciones

``` TypeScript
```



## _Ejercicio 8 - Palabras encadenadas en un array_

### Enunciado:

Dado un array que contiene exclusivamente cadenas de texto, comprobar que las palabras del array están encadenadas. Esto es, una o más letras del final de una cadena coinciden con el comienzo de la siguiente cadena del array.

Ejemplos de palabras encadenadas:

“apply” and “plywood”

“apple” and “each”

“behemoth” and “mother”

Ejemplos de palabras no encadenadas:

“apply” and “playground”

“apple” and “peggy”

“behemoth” and “mathematics

Para resolver este ejercicio, escriba una función meshArray que compruebe si las cadenas del array están encadenadas o no. La función recibirá como parámetro un array de cadenas de texto y devolverá:

“Error al encadenar” si las cadenas del array no están encadenadas.
Una cadena de texto que contenga las letras que encadenan las palabras del array. A priori no sabe cuantas letras encadenadas tendrán en común, pero al menos será una.
Ejemplos de ejecución del programa:

1: [“allow”, “lowering”, “ringmaster”, “terror”] –> “lowringter”

Este array está encadenado porque:

Las letras “low” de la primera palabra encadenan con la palabra “lowering”.
Las letras “ring” en la segunda y tercera palabras están encadenadas.
Por último, las letras “ter” en las dos últimas palabras también están encadenadas.
2: [“kingdom”, “dominator”, “notorious”, “usual”, “allegory”] –> “Error al encadenar”

En este caso, aunque las palabras “dominator” y “notorious” comparten letras en el mismo orden, las últimas letras de la primera palabra no encadenan con las primeras letras de la segunda.

#### Código

``` TypeScript
```

#### Comprobaciones

``` TypeScript
```



## Elementos Bibliográficos:

- Guión de la Práctica 4, https://ull-esit-inf-dsi-2223.github.io/prct04-arrays-tuples-enums/ .

- Guia de TypeDoc, https://typedoc.org/guides/installation/ .

- Adam Freeman - Essential TypeScript 4: From Beginner to ProURL,https://www.oreilly.com/library/view/essential-typescript-4/9781484270110/html/Part_1.xhtml .

- Basic writing and formatting syntax, https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax .

- 

- 



## Conclusiones

Ejercicios bastante entretenidos para probar cosas, sobretodo ir aprendiendo y conociendo nuevos métodos de los tipos de datos. Quizás lo más "complicado" haya sido algún ejercicio como el 8, donde hay un poco de mareo con tema de formulas y demás, que a pesar de ser muy sencillas al final me acabo confundiendo y llega un punto en el que tengo un código muy enrevesado o directamente no funcional, o que no cumple con los requisitos especificados en el enunciado.
