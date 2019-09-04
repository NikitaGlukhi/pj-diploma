import { Module } from "@nestjs/common";
import { CountryController } from "./controller/country.controller";
import { CountryService } from "./services/country.service";
import { CountryRepositoryLayer } from "./services/country.repository.layer";
import { TypeOrmModule } from '@nestjs/typeorm';
import { COUNTRY_ENTITIES } from "./entities";

@Module({
  controllers: [ CountryController ],
  imports: [
    TypeOrmModule.forFeature(COUNTRY_ENTITIES)
  ],
  exports: [],
  providers: [
    CountryService,
    CountryRepositoryLayer
  ]
})

export class CountryModule {  }
