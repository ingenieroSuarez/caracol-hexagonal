import { ErrorPuntosColombia } from './error-puntos-colombia';

export class ErrorNumeroMaximoInvalida extends ErrorPuntosColombia {
  constructor(mensaje: string) {
    super(mensaje, ErrorNumeroMaximoInvalida.name);
  }
}