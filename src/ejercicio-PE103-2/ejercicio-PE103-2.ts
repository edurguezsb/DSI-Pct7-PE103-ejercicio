/**
 * Clase que representa a una persona con datos personales.
 */
export class Persona {
    private _nombre: string;
    private _apellidos: string;
    private _fechaNacimiento: Date;
    private _genero: string;
  
    /**
     * Crea una nueva instancia de la clase Persona.
     * @param nombre El nombre de la persona.
     * @param apellidos Los apellidos de la persona.
     * @param fechaNacimiento La fecha de nacimiento de la persona.
     * @param genero El género de la persona.
     */
    constructor(nombre: string, apellidos: string, fechaNacimiento: Date, genero: string) {
      this._nombre = nombre;
      this._apellidos = apellidos;
      this._fechaNacimiento = fechaNacimiento;
      this._genero = genero;
    }
  
    public get nombre(): string {
      return this._nombre;
    }
  
    public set nombre(nombre: string) {
      this._nombre = nombre;
    }
  
    public get apellidos(): string {
      return this._apellidos;
    }
  
    public set apellidos(apellidos: string) {
      this._apellidos = apellidos;
    }
  
    public get fechaNacimiento(): Date {
      return this._fechaNacimiento;
    }
  
    public set fechaNacimiento(fechaNacimiento: Date) {
      this._fechaNacimiento = fechaNacimiento;
    }
  
    public get genero(): string {
      return this._genero;
    }
  
    public set genero(genero: string) {
      this._genero = genero;
    }
  }
  
/**
* Clase que representa a un estudiante, que es una persona con correo electrónico institucional.
*/
export class Estudiante extends Persona {
    private _correoInstitucional: string;
  
    /**
     * Crea una nueva instancia de la clase Estudiante.
     * @param nombre El nombre del estudiante.
     * @param apellidos Los apellidos del estudiante.
     * @param fechaNacimiento La fecha de nacimiento del estudiante.
     * @param genero El género del estudiante.
     * @param correoInstitucional El correo electrónico institucional del estudiante.
     */
    constructor(nombre: string, apellidos: string, fechaNacimiento: Date, genero: string, correoInstitucional: string) {
      super(nombre, apellidos, fechaNacimiento, genero);
      this._correoInstitucional = correoInstitucional;
    }
  
    public get correoInstitucional(): string {
    return this._correoInstitucional;
    }

    public set correoInstitucional(correoInstitucional: string) {
    this._correoInstitucional = correoInstitucional;
    }
    }
    
/**
* Clase que representa a un profesor, que es una persona con correo electrónico institucional.
*/
export class Profesor extends Persona {
    private _correoInstitucional: string;
    /**
    *Crea una nueva instancia de la clase Profesor.
    @param nombre El nombre del profesor.
    @param apellidos Los apellidos del profesor.
    @param fechaNacimiento La fecha de nacimiento del profesor.
    @param genero El género del profesor.
    @param correoInstitucional El correo electrónico institucional del profesor.
    */
    constructor(nombre: string, apellidos: string, fechaNacimiento: Date, genero: string, correoInstitucional: string) {
    super(nombre, apellidos, fechaNacimiento, genero);
    this._correoInstitucional = correoInstitucional;
    }

    public get correoInstitucional(): string {
    return this._correoInstitucional;
    }

    public set correoInstitucional(correoInstitucional: string) {
    this._correoInstitucional = correoInstitucional;
    }
    }

/**
* Clase que representa a una asignatura, que relaciona un conjunto de profesores que la imparten con un conjunto de estudiantes que la cursan.
*/
export class Asignatura {
    private _profesores: Profesor[];
    private _estudiantes: Estudiante[];
    /**
    
    Crea una nueva instancia de la clase Asignatura.
    @param profesores El conjunto de profesores que imparten la asignatura.
    @param estudiantes El conjunto de estudiantes que cursan la asignatura.
    */
    constructor(profesores: Profesor[], estudiantes: Estudiante[]) {
    this._profesores = profesores;
    this._estudiantes = estudiantes;
    }

    public get alumnado(): Estudiante[] {
    return this._estudiantes;
    }

    public get profesorado(): Profesor[] {
    return this._profesores;
    }

    set estudiantes(estudiantes: Estudiante[]) {
        this._estudiantes = estudiantes;
      }
    }