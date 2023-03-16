import { expect } from 'chai';
import { ImperialMass } from '../../src/Ejercicio-1-PE103/ImperialMass';

describe('ImperialMass', () => {
  it('debería convertir correctamente onzas a libras', () => {
    const mass = new ImperialMass(16);
    expect(mass.getLibras()).to.equal(1);
  });

  it('debería convertir correctamente libras a onzas', () => {
    const mass = new ImperialMass(2);
    mass.setLibras(1);
    expect(mass.getOnzas()).to.equal(16);
  });

  it('debería convertir correctamente libras a piedras', () => {
    const mass = new ImperialMass(28);
    mass.setLibras(28);
    expect(mass.getPiedras()).to.equal(2);
  });

  it('debe convertir correctamente piedras a libras', () => {
    const mass = new ImperialMass(4);
    mass.setPiedras(2);
    expect(mass.getLibras()).to.equal(28);
  });

  it('debería convertir correctamente piedras a centenas', () => {
    const mass = new ImperialMass(56);
    mass.setCentenas(56);
    expect(mass.getCentenas()).to.equal(56);
  });

  it('debería convertir correctamente centenas a piedras', () => {
    const mass = new ImperialMass(2);
    mass.setCentenas(1);
    expect(mass.getPiedras()).to.equal(8);
  });

  it('debería convertir correctamente centenas a toneladas', () => {
    const mass = new ImperialMass(400);
    expect(mass.getToneladas()).to.equal(20);
  });

  it('debe convertir correctamente toneladas a centenas', () => {
    const mass = new ImperialMass(2);
    mass.setTons(20);
    expect(mass.getCentenas()).to.equal(400);
  });
});
