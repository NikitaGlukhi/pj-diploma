import { Injectable } from "@nestjs/common";
import { CountryRepositoryLayer } from "./country.repository.layer";

@Injectable()
export class CountryService {

  constructor(private readonly repositoryLayer: CountryRepositoryLayer) {  }

  public async getCountryNames() {
    return await this.repositoryLayer.getNames();
  }

  public async getCitiesNames(countryISO: string) {
    return await this.repositoryLayer.getCities(countryISO);
  }
}
