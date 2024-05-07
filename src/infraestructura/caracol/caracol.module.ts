import { Module } from '@nestjs/common';
import { CaracolControlador } from './controlador/caracol.controlador';
import { ManejadorProcesarMovimiento } from 'src/aplicacion/caracol/procesar-movimiento.manejador';
import { ServicioMovimientoCaracol } from 'src/dominio/caracol/servicio/servicio-movimiento-caracol';
import { ServicioValidarParametros } from 'src/dominio/caracol/servicio/servicio-validar-parametros';
import { RepositorioCaracol } from 'src/dominio/caracol/puerto/repositorio/repositorio-caracol';
import { RepositorioCaracolImplementacion } from './adaptador/repositorio/repositorio-caracol-implementacion';

const repositorioCaracol = {
    provide: RepositorioCaracol,
    useClass: RepositorioCaracolImplementacion,
  };

@Module({
  imports: [  ],
  providers:[ 
    ManejadorProcesarMovimiento,
    ServicioMovimientoCaracol,
    ServicioValidarParametros,
    repositorioCaracol
 ],
  controllers: [CaracolControlador],
})
export class CaracolModule {}