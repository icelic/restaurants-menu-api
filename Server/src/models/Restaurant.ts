import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { BaseModel } from './BaseModel';
import { Menu } from './Menu';
import { FoodType } from './FoodType';

@Entity()
export class Restaurant extends BaseModel {
  @Column()
  label: string;

  @Column()
  imageKey: string;

  @OneToMany(() => Menu, (menu) => menu.restaurant)
  menus: Menu[];

  @ManyToMany(() => FoodType)
  @JoinTable({ name: 'restaurant_has_food_type' })
  foodTypes: FoodType[];
}
