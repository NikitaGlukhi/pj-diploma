import { Entity, Column, JoinColumn, PrimaryColumn } from "typeorm";

@Entity('country')

export class CountryEntity {
  @PrimaryColumn({ type: 'char' })
  id: string;

  @Column({ type: "varchar", length: 255 })
  name: string
}
