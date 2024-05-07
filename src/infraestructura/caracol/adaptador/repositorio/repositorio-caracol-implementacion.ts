import { RepositorioCaracol } from "src/dominio/caracol/puerto/repositorio/repositorio-caracol"


export class RepositorioCaracolImplementacion implements RepositorioCaracol{
    registrarMovimiento(numero: number, matriz: [] ){
        console.log('implementar repositorio.. ');
        console.log(`${numero} - ${matriz}`);
    }
}