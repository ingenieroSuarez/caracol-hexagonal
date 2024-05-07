import { Injectable } from '@nestjs/common';
import { ErrorNumeroMaximoInvalida } from 'src/dominio/errores/error-numero-maximo';
import { ErrorNumeroRequerido } from 'src/dominio/errores/error-numero-requerido';

@Injectable()
export class ServicioValidarParametros{
    ejecutar( numero: string ):number {
        const numeroEntero= parseInt(numero, 10);
        if(!numeroEntero) throw new ErrorNumeroRequerido(`SE REQUIERE NUMERO: ${numero}`);
        const maximoValor= parseInt(process.env.MAXIMO_VALOR, 10);
        if(numeroEntero > maximoValor) throw new ErrorNumeroMaximoInvalida(`El número '${ numeroEntero }' debe ser menor a ${maximoValor}`);
        return numeroEntero;
    }
}