import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeGraphQLModule } from 'typegraphql-nestjs';

import { AppController } from './app.controller';
import AppResolver from './app.resolver';
import { AppService } from './app.service';
import { PatientModule } from './patient/patient.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeGraphQLModule.forRoot({
      emitSchemaFile: true,
      validate: false,
    }),
    PatientModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
