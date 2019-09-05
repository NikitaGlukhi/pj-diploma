import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { CityEntity } from "./city.entity";

export interface OfficeCoords {
  lat: number;
  lng: number;
}

@Entity('office')
export class OfficeEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  address: string;

  @Column({ type: 'int', nullable: false })
  officeNumber: number;

  @Column({ type: 'int', nullable: false })
  maxParcelWeight: number;

  @Column({ type: 'simple-json', nullable: false })
  coords: OfficeCoords;

  @Column({ type: 'varchar', length: 255, nullable: false })
  director: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  phoneNumber: string;

  @Column({ type: 'int', nullable: false })
  cityId: number;

  @ManyToOne(() => CityEntity, data => data.office, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn()
  city: CityEntity;
}
