/**
 * This enumeration shows the different allergens that we have in this case
 * @enum
 */

enum Allergen {
    Huevo = 1,
    Cacahuete = 2,
    Marisco = 4,
    Fresa = 8,
    Tomate = 16,
    Chocolate = 32,
    Polen = 64,
    Gato = 128,
  }
  
/**
 * Function that returns to which allergens a person is allergic
 * @param puntuation - Total puntuation of a person allergies
 * @returns - List of allergens to which that person is allergic
 */
  function getAllergens(puntuation: number): Allergen[] | undefined {
    if (!Number.isInteger(puntuation) || puntuation <= 0) {
      return undefined;
    }
  
    const allergens = Object.values(Allergen).filter(
      (allergen) => typeof allergen === "number" && puntuation & allergen
    );
  
    return allergens as Allergen[];
  }


console.log(getAllergens(129)); // It should return [Huevo, Gato]
console.log(getAllergens(257)); // It should return [Huevo]
console.log(getAllergens(256)); // It should return []
console.log(getAllergens(515)); // It should return [Huevo, Cacahuete]
console.log(getAllergens(84));  // It should return [Marisco, Tomate, Polen]