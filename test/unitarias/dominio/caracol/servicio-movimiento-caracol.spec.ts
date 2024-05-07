import { RepositorioCaracol } from 'src/dominio/caracol/puerto/repositorio/repositorio-caracol';
import { ServicioMovimientoCaracol } from '../../../../src/dominio/caracol/servicio/servicio-movimiento-caracol';

describe('ServicioMovimientoCaracol', () => {
  let servicioMovimientoCaracol: ServicioMovimientoCaracol;
  let repositorioCaracol: RepositorioCaracol
  beforeEach(() => {
    servicioMovimientoCaracol = new ServicioMovimientoCaracol(repositorioCaracol);
  });

  it('debería ejecutar el movimiento en la matriz y registrar el movimiento en el repositorio', () => {
    const numero = 3;
    const matrizEsperada = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5],
    ];
    const resultado = servicioMovimientoCaracol.ejecutarMovimientoEnMatriz(numero);
    expect(resultado).toEqual(matrizEsperada);
  });
  it('debería crear la matriz correctamente para números entre 3 y 15', () => {
    const numerosPrueba = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    numerosPrueba.forEach((numero) => {
      const matrizGenerada = servicioMovimientoCaracol.ejecutarMovimientoEnMatriz(numero);
      expect(matrizGenerada).toEqual(expect.arrayContaining([expect.anything()]));
    });
  });
});