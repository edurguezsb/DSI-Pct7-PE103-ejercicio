/**
 * Comprueba si un paseo generado por una aplicación de la ciudad de Cartesia
 * puede ser completado en exactamente 10 minutos y regresa al punto de partida.
 * @param paseo Array de cadenas de una única letra que representan las direcciones en las que debemos caminar.
 * @returns Verdadero si el paseo se puede completar en exactamente 10 minutos y regresa al punto de partida,
 * falso en otro caso. Undefined si el paseo incluye alguna dirección no válida o un array vacío.
 */
export function comprobarPaseo(paseo: string[]): boolean | undefined {
    const DIRECCIONES_VALIDAS = ['n', 's', 'e', 'o']; // válidas
    let x = 0; // Coordenada x
    let y = 0; // Coordenada y
    let tiempo = 0; // Tiempo transcurrido
  
    if (!paseo || paseo.length === 0) {
      return undefined;
    }
  
    for (const direccion of paseo) {
      if (!DIRECCIONES_VALIDAS.includes(direccion)) {
        return undefined;
      }
  
      switch (direccion) {
        case 'n':
          y++;
          break;
        case 's':
          y--;
          break;
        case 'e':
          x++;
          break;
        case 'o':
          x--;
          break;
      }
  
      tiempo++;
    }
  
    return tiempo === 10 && x === 0 && y === 0;
  }
  