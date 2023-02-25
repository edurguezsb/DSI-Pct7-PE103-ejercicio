/**
 * Represent a complex number.
 */
export type ComplexNumber = [number, number];

/**
 * Adding two complex numbers.
 * @param a First complex number.
 * @param b Second complex number.
 * @returns The result is a complex number too.
 */
export function add(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
  return [a[0] + b[0], a[1] + b[1]];
}

/**
 * Subtracting two complex numbers.
 * @param a First complex number.
 * @param b Second complex number.
 * @returns The result is a complex number too.
 */
export function sub(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
  return [a[0] - b[0], a[1] - b[1]];
}

/**
 * Multiplication of two complex numbers.
 * @param a First complex number.
 * @param b Second complex number.
 * @returns The result is a complex number too.
 */
export function mult(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
  const real = a[0] * b[0] - a[1] * b[1];
  const imaginary = a[0] * b[1] + a[1] * b[0];
  return [real, imaginary];
}

/**
 * Division of two complex numbers.
 * @param a First complex number.
 * @param b Second complex number.
 * @returns The result is a complex number too.
 */
export function div(a: ComplexNumber, b: ComplexNumber): ComplexNumber {
  const real = ((a[0] * b[0]) + (a[1] * b[1])) / ((b[0] * b[0]) + (b[1] * b[1]));
  const imaginary = ((a[1] * b[0]) - (a[0] * b[1])) / ((b[0] * b[0]) + (b[1] * b[1]));
  return [real, imaginary];
}

/**
 * Scalar product of a complex number and a real number.
 * @param a The complex number to scale.
 * @param b The real number by which the complex number is scaled.
 * @returns The result of the dot product as a complex number.
 */
export function prod(a: ComplexNumber, b: number): ComplexNumber {
  return [a[0] * b, a[1] * b];
}

/**
 * Conjugate of a complex number.
 * @param a The complex number to calculate its conjugate.
 * @returns The conjugate of the complex number as a complex number.
 */
export function conj(a: ComplexNumber): ComplexNumber {
  return [a[0], -a[1]];
}

/**
 * Module of a complex number.
 * @param a The complex number to calculate its module.
 * @returns The module of the complex number as a real number.
 */
export function abs(a: ComplexNumber): number {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
}


const a1: ComplexNumber = [3, 4];
const a2: ComplexNumber = [1, -2];


//console.log("Suma: ", add(a1, a2));
//console.log("Resta: ", sub(a1, a2));
//console.log("Multiplicación: ", mult(a1, a2));
//console.log("División: ", div(a1, a2));
//console.log("Producto escalar: ", prod(a1, 2));
//console.log("Conjugado de a1: ", conj(a1));
//console.log("Módulo de a1: ", abs(a1));
