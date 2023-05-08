import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubjectModule } from './subject/subject.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type":'mssql',
    "host": 'HOMEPC2022\\SQLDEV',
    "port": 1433,
    "username": 'sa',
    "password": 'Cambiar123',
    "database": 'demo',
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
  }), SubjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
