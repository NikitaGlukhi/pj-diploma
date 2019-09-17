import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { CountryEntity } from "../entities/country.entity";
import { CityEntity } from "../entities/city.entity";
import { OfficeEntity } from "../entities/office.entity";

@Injectable()
export class CountryRepositoryLayer {

  constructor (
    @InjectRepository(CountryEntity) private countryEntity: Repository<CountryEntity>,
    @InjectRepository(CityEntity) private cityEntity: Repository<CityEntity>,
    @InjectRepository(OfficeEntity) private officeEntity: Repository<OfficeEntity>
  ) {  }

  public async getNames() {
    return await this.countryEntity.find();
  }

  public async getCities(countryISO: string) {
    return await this.cityEntity.find({
      select: ['cityName', 'postIndex', 'countryId'],
      where: {
        countryId: countryISO
      }
    })
  }

  public async getOffices() {
    return await this.officeEntity.find();
  }
}
