import { Column, Entity, OneToMany, ManyToOne } from 'typeorm';
import { BaseModel } from './BaseModel';
import { Restaurant } from './Restaurant';
import { County } from './County';

@Entity()
export class City extends BaseModel {
  @Column()
  label: string;

  @OneToMany(() => Restaurant, (restaurant) => restaurant.city)
  restaurants: Restaurant[];

  @ManyToOne(() => County, (county) => county.cities)
  county: County;
}
