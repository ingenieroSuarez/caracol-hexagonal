import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { EnvVariables } from './infraestructura/configuracion/environment/env-variables.enum';
import { FiltroExcepcionesPuntosColombia } from './infraestructura/excepciones/filtro-excepciones-puntos-colombia';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new FiltroExcepcionesPuntosColombia());
  const configService = app.get(ConfigService);
  const swaggerOptions = new DocumentBuilder()
  .setTitle('Prueba técnica Puntos Colombia')
  .setDescription('Aplicación de caracol en matriz. Juan Fernando Sánchez Suárez, Correo: ingeniero.sanchezsuarez@gmail.com')
  .setVersion('1.0')
  .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('/api/doc', app, swaggerDocument);

  await app.listen(configService.get(EnvVariables.APPLICATION_PORT));
}
bootstrap();
