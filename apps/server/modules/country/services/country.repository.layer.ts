import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { CountryEntity } from "../entities/country.entity";

@Injectable()
export class CountryRepositoryLayer {

  constructor(@InjectRepository(CountryEntity) private entity: Repository<CountryEntity>) {  }

  public async getNames() {
    return await this.entity.find({ select: ['name'] });
  }
}
