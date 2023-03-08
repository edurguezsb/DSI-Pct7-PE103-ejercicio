import "mocha";
import { expect } from "chai";
import { Lista } from "../../src/ejercicio-2/Lista";

describe("Lista", () => {
  it("debería crear una lista vacía", () => {
    const lista = new Lista();
    expect(lista.length()).to.equal(0);
  });

  it("debería crear una lista con elementos", () => {
    const lista = new Lista("hola", "mundo");
    expect(lista.length()).to.equal(2);
    expect(lista.toArray()).to.deep.equal(["hola", "mundo"]);
  });

  it("debería agregar elementos al final de la lista", () => {
    const lista = new Lista(1, 2);
    lista.append(new Lista(3, 4));
    expect(lista.toArray()).to.deep.equal([1, 2, 3, 4]);
  });

  it("debería concatenar varias listas en una sola lista", () => {
    const lista1 = new Lista(1, 2);
    const lista2 = new Lista(3, 4);
    const lista3 = new Lista(5, 6);
    const lista4 = lista1.concatenate(lista2, lista3);
    expect(lista4.toArray()).to.deep.equal([1, 2, 3, 4, 5, 6]);
  });

  it("debería filtrar los elementos de la lista", () => {
    const lista = new Lista(1, 2, 3, 4, 5);
    const numerosPares = lista.filter((n) => n % 2 === 0);
    expect(numerosPares.toArray()).to.deep.equal([2, 4]);
  });

  it("debería mapear los elementos de la lista", () => {
    const lista = new Lista(1, 2, 3, 4, 5);
    const numerosDuplicados = lista.map((n) => n * 2);
    expect(numerosDuplicados.toArray()).to.deep.equal([2, 4, 6, 8, 10]);
  });

  it("debería reducir los elementos de la lista", () => {
    const lista = new Lista(1, 2, 3, 4, 5);
    const sumaNumeros = lista.reduce((acumulador, n) => acumulador + n, 0);
    expect(sumaNumeros).to.equal(15);
  });

  it("debería invertir los elementos de la lista", () => {
    const lista = new Lista(1, 2, 3, 4, 5);
    const numerosInversos = lista.reverse();
    expect(numerosInversos.toArray()).to.deep.equal([5, 4, 3, 2, 1]);
  });

  it("debería iterar sobre los elementos de la lista y ejecutar la función de callback en cada uno", () => {
    const lista = new Lista<number>(1, 2, 3);
    const elementos: number[] = [];
    lista.forEach((n) => elementos.push(n * 2));
    expect(elementos).to.deep.equal([2, 4, 6]);
  });

  it("debería devolver un array vacío si se aplica filter a una lista vacía", () => {
    const lista = new Lista<number>();
    const listaFiltrada = lista.filter((n: number) => n % 2 === 0);
    expect(listaFiltrada.toArray()).to.deep.equal([]);
  });
});