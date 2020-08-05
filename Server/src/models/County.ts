import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from './BaseModel';
import { City } from './City';

@Entity()
export class County extends BaseModel {
  @Column()
  label: string;

  @OneToMany(() => City, (city) => city.county)
  cities: City[];
}
