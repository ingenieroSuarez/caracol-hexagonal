import { Controller, Get, Param } from '@nestjs/common';
import { ManejadorProcesarMovimiento } from 'src/aplicacion/caracol/procesar-movimiento.manejador';
import { ApiTags } from '@nestjs/swagger';

@Controller('caracol')
@ApiTags('Caracol')
export class CaracolControlador {
    constructor(
        private readonly _manejadorProcesarMovimiento : ManejadorProcesarMovimiento,
    ){}

    @Get(':numero')
    ejecutar(@Param('numero') numero: string){
        return this._manejadorProcesarMovimiento.ejecutar(numero);
    }
}