import 'mocha';
import { expect } from 'chai';
import { Persona } from '../../src/ejercicio-PE103-2/ejercicio-PE103-2';
import { Estudiante } from '../../src/ejercicio-PE103-2/ejercicio-PE103-2';
import { Profesor } from '../../src/ejercicio-PE103-2/ejercicio-PE103-2';
import { Asignatura } from '../../src/ejercicio-PE103-2/ejercicio-PE103-2';


describe('Pruebas para la implementación de clases', () => {
  describe('Pruebas para la clase Persona', () => {
    it('El método get nombre debe devolver el nombre de la persona', () => {
      const persona = new Persona('Eduardo', 'Rodriguez', new Date(1999, 10, 15), 'M');
      expect(persona.nombre).to.equal('Eduardo');
    });

    it('El método set nombre debe establecer el nombre de la persona', () => {
      const persona = new Persona('Eduardo', 'Rodriguez', new Date(1999, 10, 15), 'M');
      persona.nombre = 'Petra';
      expect(persona.nombre).to.equal('Petra');
    });
  });

  describe('Pruebas para la clase Estudiante', () => {
    it('El método get correoInstitucional debe devolver el correo electrónico institucional del estudiante', () => {
      const estudiante = new Estudiante('Eduardo', 'Rodriguez', new Date(1999, 10, 15), 'M', 'Eduardo.rodriguez@ejemplo.com');
      expect(estudiante.correoInstitucional).to.equal('Eduardo.rodriguez@ejemplo.com');
    });

    it('El método set correoInstitucional debe establecer el correo electrónico institucional del estudiante', () => {
      const estudiante = new Estudiante('Eduardo', 'Rodriguez', new Date(1999, 10, 15), 'M', 'Eduardo.rodriguez@ejemplo.com');
      estudiante.correoInstitucional = 'Eduardo.rodriguez@ejemplo.com';
      expect(estudiante.correoInstitucional).to.equal('Eduardo.rodriguez@ejemplo.com');
    });
  });

  describe('Pruebas para la clase Profesor', () => {
    it('El método get correoInstitucional debe devolver el correo electrónico institucional del profesor', () => {
      const profesor = new Profesor('Petra', 'Hermosa', new Date(1777, 7, 7), 'F', 'Petra.gonzalez@ejemplo.com');
      expect(profesor.correoInstitucional).to.equal('Petra.gonzalez@ejemplo.com');
    });

    it('El método set correoInstitucional debe establecer el correo electrónico institucional del profesor', () => {
      const profesor = new Profesor('Petra', 'Hermosa', new Date(1777, 7, 7), 'F', 'Petra.gonzalez@ejemplo.com');
      profesor.correoInstitucional = 'Petra.gonzalez2@ejemplo.com';
      expect(profesor.correoInstitucional).to.equal('Petra.gonzalez2@ejemplo.com');
    });
  });

  describe('Pruebas para la clase Asignatura', () => {
    const estudiante1 = new Estudiante('Eduardo', 'Rodriguez', new Date(1999, 10, 15), 'M', 'Eduardo.rodriguez@ejemplo.com');
    const estudiante2 = new Estudiante('Pepe', 'Benavente', new Date(1500, 1, 1), 'M', 'Pepe.benavente@ejemplo.com');
    const profesor1 = new Profesor('Petra', 'Hermosa', new Date(1777, 7, 7), 'F', 'Petra.gonzalez@ejemplo.com');
    const profesor2 = new Profesor('Machu', 'Pichu', new Date(1000, 10, 10), 'M', 'Machu.pichu@ejemplo.com');
    const asignatura = new Asignatura([profesor1, profesor2], [estudiante1, estudiante2]);


    it('El método get profesorado debe devolver el listado de profesores que imparten la asignatura', () => {
      expect(asignatura.profesorado).to.deep.equal([profesor1, profesor2]);
      });
    });
    
  });