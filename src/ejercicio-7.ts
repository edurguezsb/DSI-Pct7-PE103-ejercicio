/**
 * Decodes the value of a resistor based on the colors of its bands.
 * @param colors The colors of the resistance bands.
 * @returns The numerical value of the resistor.
 */
function decodeResistor(colors: string[]): number {
    const equivalence = {
      negro: 0,
      marrón: 1,
      rojo: 2,
      naranja: 3,
      amarillo: 4,
      verde: 5,
      azul: 6,
      violeta: 7,
      gris: 8,
      blanco: 9,
    };
  
    const color1 = equivalence[colors[0].toLowerCase()];
    const color2 = equivalence[colors[1].toLowerCase()];
    const result = (color1 * 10) + color2;
  
    return result;
}

  
console.log(decodeResistor(["Marrón", "Verde"]));
console.log(decodeResistor(["Marrón", "Verde", "Violeta"]));
console.log(decodeResistor(["Amarillo", "Blanco"]));
console.log(decodeResistor(["Negro", "Negro"]));
console.log(decodeResistor(["Naranja", "Azul", "Verde", "Blanco"]));
  