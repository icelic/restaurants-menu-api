import { Column, Entity, JoinTable, ManyToMany, OneToMany, ManyToOne } from 'typeorm';
import { BaseModel } from './BaseModel';
import { Menu } from './Menu';
import { FoodType } from './FoodType';
import { City } from './City';

@Entity()
export class Restaurant extends BaseModel {
  @Column()
  label: string;

  @Column()
  location: string;

  @Column()
  locationAddress: string;

  @Column()
  imageKey: string;

  @OneToMany(() => Menu, (menu) => menu.restaurant)
  menus: Menu[];

  @ManyToMany(() => FoodType)
  @JoinTable({ name: 'restaurant_has_food_type' })
  foodTypes: FoodType[];

  @ManyToOne(() => City, (city) => city.restaurants)
  city: City;
}
