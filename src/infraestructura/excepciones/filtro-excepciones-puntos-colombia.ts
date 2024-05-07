import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { ErrorPuntosColombia } from '../../dominio/errores/error-puntos-colombia';
import { Message } from './message';

@Catch(ErrorPuntosColombia)
export class FiltroExcepcionesPuntosColombia implements ExceptionFilter {
  catch(error: ErrorPuntosColombia, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const statusCode = HttpStatus.BAD_REQUEST;
    const message: Message = {
      statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: error.message,
    };
    response.status(statusCode).json(message);
  }
}
