import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { CityEntity } from "./city.entity";

@Entity('country')

export class CountryEntity {
  @PrimaryColumn({ type: 'char', length: 3, nullable: false })
  id: string;

  @Column({ type: "varchar", length: 255, nullable: false })
  name: string;

  @OneToMany(() => CityEntity, data => data.country)
  city: CityEntity
}
