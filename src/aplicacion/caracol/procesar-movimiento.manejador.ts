import { Injectable } from '@nestjs/common';
import { ServicioMovimientoCaracol } from 'src/dominio/caracol/servicio/servicio-movimiento-caracol';
import { ServicioValidarParametros } from 'src/dominio/caracol/servicio/servicio-validar-parametros';

@Injectable()
export class ManejadorProcesarMovimiento{
    constructor(
        private readonly _servicioValidarParametros: ServicioValidarParametros,
        private readonly _servicioMovimientoCaracol: ServicioMovimientoCaracol
    ){}

    ejecutar(numero: string):number[][] {
        const numeroValidado = this._servicioValidarParametros.ejecutar(numero);
        return this._servicioMovimientoCaracol.ejecutarMovimientoEnMatriz(numeroValidado);
    }
}