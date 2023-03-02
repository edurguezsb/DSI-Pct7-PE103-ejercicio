import 'mocha';
import { expect } from 'chai';
import { comprobarPaseo } from '../../src/ejercicio-PE103-1/ejercicio-PE103-1';


describe('comprobarPaseo', () => {
  it('debería devolver verdadero si el paseo se puede completar en exactamente 10 minutos y regresa al punto de partida', () => {
    const paseo = ['n', 'n', 'o', 'o', 's', 's', 'e', 'e', 'e', 'o'];
    const resultado = comprobarPaseo(paseo);
    expect(resultado).to.equal(true);
  });



  it('debería devolver falso si el paseo tarda más de 10 minutos', () => {
    const paseo = ['n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'n'];
    const resultado = comprobarPaseo(paseo);
    expect(resultado).to.equal(false);
  });

  it('debería devolver undefined si el paseo incluye una dirección no válida', () => {
    const paseo = ['n', 's', 'e', 'o', 'a'];
    const resultado = comprobarPaseo(paseo);
    expect(resultado).to.equal(undefined);
  });

  it('debería devolver undefined si el paseo es un array vacío', () => {
    const paseo: string[] = [];
    const resultado = comprobarPaseo(paseo);
    expect(resultado).to.equal(undefined);

  it('debería devolver falso si el paseo no regresa al punto de partida', () => {
        const paseo = ['n', 'o', 's', 'e'];
        const resultado = comprobarPaseo(paseo);
        expect(resultado).to.equal(false);
      });

  });
});

