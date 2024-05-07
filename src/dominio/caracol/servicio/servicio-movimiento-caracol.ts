import { Injectable } from '@nestjs/common';
import { RepositorioCaracol } from '../puerto/repositorio/repositorio-caracol';

@Injectable()
export class ServicioMovimientoCaracol{
    constructor(
        private readonly _repositorioCaracol : RepositorioCaracol
    ){}
    ejecutarMovimientoEnMatriz(numero: number): number[][] {
        const matriz:number[][]=[];
        let valor = 1;
        let inicioFila = 0;
        let finFila = numero - 1;
        let inicioColumna = 0;
        let finColumna = numero - 1;
        for (let i = 0; i < numero; i++) {
            matriz[i] = [];
            for (let j = 0; j < numero; j++) {
                matriz[i][j] = 0;
            }
        }
        while (valor <= numero * numero) {
            for (let i = inicioColumna; i <= finColumna; i++) {
                matriz[inicioFila][i] = valor++;
            }
            inicioFila++;
            for (let i = inicioFila; i <= finFila; i++) {
                matriz[i][finColumna] = valor++;
            }
            finColumna--;
            for (let i = finColumna; i >= inicioColumna; i--) {
                matriz[finFila][i] = valor++;
            }
            finFila--;
            for (let i = finFila; i >= inicioFila; i--) {
                matriz[i][inicioColumna] = valor++;
            }
            inicioColumna++;
        }
        //this._repositorioCaracol.registrarMovimiento(numero, matriz)
        return matriz;
    }
}