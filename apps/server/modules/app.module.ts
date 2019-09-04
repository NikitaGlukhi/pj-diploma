import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { CountryModule } from "./country/country.module";
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dbConfig from '../../../ormconfig';

@Module({
  controllers: [],
  imports: [
    CountryModule,
    TypeOrmModule.forRoot(dbConfig)
  ],
  providers: [],
})
export class AppModule {  }
