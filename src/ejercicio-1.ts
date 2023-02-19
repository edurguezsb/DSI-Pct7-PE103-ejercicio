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
  
  function getAllergens(score: number): Allergen[] | undefined {
    if (!Number.isInteger(score) || score <= 0) {
      return undefined;
    }
  
    const allergens = Object.values(Allergen).filter(
      (allergen) => typeof allergen === "number" && score & allergen
    );
  
    return allergens as Allergen[];
  }
  

console.log(getAllergens(129)); // It should return [Huevo, Gato]
console.log(getAllergens(257)); // It should return [Huevo]
console.log(getAllergens(256)); // It should return []
console.log(getAllergens(515)); // It should return [Huevo, Cacahuete]
console.log(getAllergens(84));  // It should return [Marisco, Tomate, Polen]