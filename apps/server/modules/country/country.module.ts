import { Module } from "@nestjs/common";
import { CountryController } from "./controller/country.controller";

@Module({
  controllers: [ CountryController ],
  imports: [
  ],
  exports: [],
  providers: []
})

export class CountryModule {  }
