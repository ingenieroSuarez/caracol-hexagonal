import { ServicioValidarParametros } from '../../../../src/dominio/caracol/servicio/servicio-validar-parametros';
import { ErrorNumeroMaximoInvalida } from '../../../../src/dominio/errores/error-numero-maximo';
import { ErrorNumeroRequerido } from '../../../../src/dominio/errores/error-numero-requerido';

describe('ServicioValidarParametros', () => {
  let servicio: ServicioValidarParametros;

  beforeEach(() => {
    servicio = new ServicioValidarParametros();
  });

  it('debería lanzar un error si el número es requerido', () => {
    expect(() => servicio.ejecutar('')).toThrow(ErrorNumeroRequerido);
  });

  it('debería lanzar un error si el número es mayor al máximo valor permitido', () => {
    process.env.MAXIMO_VALOR = '15';
    expect(() => servicio.ejecutar('16')).toThrow(ErrorNumeroMaximoInvalida);
  });

  it('debería devolver el número entero si es válido', () => {
    process.env.MAXIMO_VALOR = '15';
    const resultado = servicio.ejecutar('5');
    expect(resultado).toBe(5);
  });
});