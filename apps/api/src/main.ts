import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.setGlobalPrefix("/api");

    const config = new DocumentBuilder()
    .setTitle('AirLinkup API')
    .setDescription('This is the official AirLinkup API description. This API means to retrieve flights information from third-party API services')
    .setVersion('1.0')
    .addTag('AirLinkup')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

	await app.listen(8080);
}
bootstrap();
