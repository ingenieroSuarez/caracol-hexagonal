import { ErrorPuntosColombia } from './error-puntos-colombia';

export class ErrorNumeroRequerido extends ErrorPuntosColombia {
  constructor(mensaje: string) {
    super(mensaje, ErrorNumeroRequerido.name);
  }
}