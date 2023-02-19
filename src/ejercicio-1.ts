function getTypeTriangle(a: number, b: number, c: number): string | undefined {
    if (a <= 0 || b <= 0 || c <= 0) {
      return undefined;
    }
    if (a + b > c && a + c > b && b + c > a) {
      if (a == b && b == c) {
        return "Equilatero";
      } else if (a == b || a == c || b == c) {
        return "Isosceles";
      } else {
        return "Escaleno";
      }
    } else {
      return undefined;
    }
  }
  console.log(getTypeTriangle(5, 5, 5));
  console.log(getTypeTriangle(5, 5, 9.5));
  console.log(getTypeTriangle(5, 6, 7));
  console.log(getTypeTriangle(3, 1, 1));
  console.log(getTypeTriangle(0, 0, 0));
  console.log(getTypeTriangle(375, 375, 375));
  console.log(getTypeTriangle(80, 80, 100));