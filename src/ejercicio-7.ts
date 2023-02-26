/**
 * Represents the colors and their corresponding values for a resistor.
 * @enum
 */
export enum ResistorColors {
  Negro = 0,
  Marrón = 1,
  Rojo = 2,
  Naranja = 3,
  Amarillo = 4,
  Verde = 5,
  Azul = 6,
  Violeta = 7,
  Gris = 8,
  Blanco = 9,
}

/**
 * Calculates the value of a resistor based on its color bands.
 * @param colors - An array of strings representing the colors of the resistor.
 * @returns The numeric value of the resistor.
 */
export function decodeResistor(colors: string[]): number {
  const values = colors.slice(0, 2).map(color => ResistorColors[color]);
  const result = Number(values.join(""));
  return result;
}


console.log(decodeResistor(["Marrón", "Negro"]));
console.log(decodeResistor(["Marrón", "Verde", "Violeta"]));
console.log(decodeResistor(["Amarillo", "Blanco"]));
console.log(decodeResistor(["Negro", "Negro"]));
console.log(decodeResistor(["Naranja", "Azul", "Verde", "Blanco"]));
