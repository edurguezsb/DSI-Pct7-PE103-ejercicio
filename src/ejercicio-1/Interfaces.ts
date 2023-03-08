/**
 * Interfaz que representa una serie.
 * @interface
 */
export interface Serie{
  nombre: string;
  año: number;
  temporadas: number;
}

/**
 * Interfaz que representa un documental.
 * @interface
 */
export interface Documentarie{
  nombre: string;
  año: number;
  duracion: number;
  topico: string;
}

/**
 * Interfaz que representa una película.
 * @interface
 */
export interface Movie{
  nombre: string;
  año: number;
  duracion: number;
}
