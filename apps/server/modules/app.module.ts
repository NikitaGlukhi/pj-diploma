import { Module } from "@nestjs/common";
import { CountryModule } from "./country/country.module";

import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from "typeorm";
import * as dbConfig from '../../../ormconfig';

@Module({
  controllers: [],
  imports: [
    CountryModule,
    TypeOrmModule.forRoot(dbConfig)
  ],
  providers: [],
})
export class AppModule {
  constructor(private readonly connection: Connection) {  }
}
