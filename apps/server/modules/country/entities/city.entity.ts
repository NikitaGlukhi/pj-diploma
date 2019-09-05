import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { CountryEntity } from "./country.entity";
import { OfficeEntity } from "./office.entity";

@Entity('city')
export class CityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255, nullable: false })
  cityName: string;

  @Column({ type: 'varchar', length: 5, nullable: false })
  postIndex: string;

  @Column({ type: 'char', length: 3, nullable: false })
  countryId: string;

  @ManyToOne(() => CountryEntity, data => data.city, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  country: CountryEntity

  @OneToMany(() => OfficeEntity, data => data.city)
  office: OfficeEntity;
}
