import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from './BaseModel';
import { Restaurant } from './Restaurant';

@Entity()
export class Menu extends BaseModel {
  @Column()
  label: string;

  @ManyToOne((type) => Restaurant, (restaurant) => restaurant.menus)
  restaurant: Restaurant;
}
