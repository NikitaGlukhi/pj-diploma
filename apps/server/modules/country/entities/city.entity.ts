import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { CountryEntity } from "./country.entity";

@Entity('city')
export class CityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255, nullable: false })
  cityName: string;

  @Column({ type: 'int', nullable: false })
  postIndex: number;

  @ManyToOne(() => CountryEntity, data => data.city, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  country: CountryEntity
}
