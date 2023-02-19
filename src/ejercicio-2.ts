type Complex = [number, number];

function add(z1: Complex, z2: Complex): Complex {
  return [z1[0] + z2[0], z1[1] + z2[1]];
}

function sub(z1: Complex, z2: Complex): Complex {
  return [z1[0] - z2[0], z1[1] - z2[1]];
}

function mult(z1: Complex, z2: Complex): Complex {
  const a = z1[0];
  const b = z1[1];
  const c = z2[0];
  const d = z2[1];
  return [a * c - b * d, b * c + a * d];
}

function div(z1: Complex, z2: Complex): Complex {
  const a = z1[0];
  const b = z1[1];
  const c = z2[0];
  const d = z2[1];
  const denom = c * c + d * d;
  return [(a * c + b * d) / denom, (b * c - a * d) / denom];
}

function prod(z: Complex, scalar: number): Complex {
  return [z[0] * scalar, z[1] * scalar];
}

function conj(z: Complex): Complex {
  return [z[0], -z[1]];
}

function abs(z: Complex): number {
  const a = z[0];
  const b = z[1];
  return Math.sqrt(a * a + b * b);
}


const z1: Complex = [1, 2];
const z2: Complex = [3, 4];

console.log(add(z1, z2)); // [4, 6]
console.log(sub(z1, z2)); // [-2, -2]
console.log(mult(z1, z2)); // [-5, 10]
console.log(div(z1, z2)); // [0.44, 0.08]
console.log(prod(z1, 3)); // [3, 6]

