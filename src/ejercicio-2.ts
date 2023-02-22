/**
 * Representa un número complejo.
 */
type ComplexNumber = [number, number];

/**
 * Realiza la suma de dos números complejos.
 * @param a Primer número complejo.
 * @param b Segundo número complejo.
 * @returns El resultado de la suma como un número complejo.
 */
function add(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
  return [a[0] + b[0], a[1] + b[1]];
}

/**
 * Realiza la resta de dos números complejos.
 * @param a Primer número complejo.
 * @param b Segundo número complejo.
 * @returns El resultado de la resta como un número complejo.
 */
function sub(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
  return [a[0] - b[0], a[1] - b[1]];
}

/**
 * Realiza la multiplicación de dos números complejos.
 * @param a Primer número complejo.
 * @param b Segundo número complejo.
 * @returns El resultado de la multiplicación como un número complejo.
 */
function mult(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
  const real = a[0] * b[0] - a[1] * b[1];
  const imag = a[0] * b[1] + a[1] * b[0];
  return [real, imag];
}

/**
 * Realiza la división de dos números complejos.
 * @param a Primer número complejo.
 * @param b Segundo número complejo.
 * @returns El resultado de la división como un número complejo.
 */
function div(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
  const real = (a[0] * b[0] + a[1] * b[1]) / (b[0] * b[0] + b[1] * b[1]);
  const imag = (a[1] * b[0] - a[0] * b[1]) / (b[0] * b[0] + b[1] * b[1]);
  return [real, imag];
}

/**
 * Realiza el producto escalar de un número complejo y un número real.
 * @param a El número complejo a escalar.
 * @param b El número real por el cual se escala el número complejo.
 * @returns El resultado del producto escalar como un número complejo.
 */
function prod(a: ComplexNumber, b: number): ComplexNumber {
  return [a[0] * b, a[1] * b];
}

/**
 * Calcula el conjugado de un número complejo.
 * @param a El número complejo para calcular su conjugado.
 * @returns El conjugado del número complejo como un número complejo.
 */
function conj(a: ComplexNumber): ComplexNumber {
  return [a[0], -a[1]];
}

/**
 * Calcula el módulo de un número complejo.
 * @param a El número complejo para calcular su módulo.
 * @returns El módulo del número complejo como un número real.
 */
function abs(a: ComplexNumber): number {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
}


const a1: ComplexNumber = [3, 4];
const a2: ComplexNumber = [1, -2];


console.log("Suma: ", add(a1, a2)); // [4, 2]
console.log("Resta: ", sub(a1, a2)); // [2, 6]
console.log("Multiplicación: ", mult(a1, a2)); // [11, -2]
console.log("División: ", div(a1, a2)); // [0.8, 2.6]
console.log("Producto escalar: ", prod(a1, 2)); // [6, 8]
console.log("Conjugado de a1: ", conj(a1)); // [3, -4]
console.log("Módulo de a1: ", abs(a1)); // 5
