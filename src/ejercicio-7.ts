/**
 * Decodifica el valor de una resistencia en función de los colores de sus bandas.
 * @param colors Los colores de las bandas de la resistencia.
 * @returns El valor numérico de la resistencia.
 */
function decodeResistor(colors: string[]): number {
    const colorToNumber = {
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
  
    const firstColor = colorToNumber[colors[0].toLowerCase()];
    const secondColor = colorToNumber[colors[1].toLowerCase()];
  
    const result = (firstColor * 10) + secondColor;
  
    return result;
  }

  
console.log(decodeResistor(["Marrón", "Verde"]));
console.log(decodeResistor(["Marrón", "Verde", "Violeta"]));
console.log(decodeResistor(["Amarillo", "Blanco"]));
console.log(decodeResistor(["Negro", "Negro"]));
console.log(decodeResistor(["Naranja", "Azul", "Verde", "Blanco"]));
  