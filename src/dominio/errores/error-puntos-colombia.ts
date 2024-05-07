export class ErrorPuntosColombia extends Error {
    constructor(mensaje: string, clase?: string) {
      super(mensaje);
      this.name = clase || ErrorPuntosColombia.name;
    }
}