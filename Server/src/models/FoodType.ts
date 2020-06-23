import { Column, Entity } from 'typeorm';
import { BaseModel } from './BaseModel';

@Entity()
export class FoodType extends BaseModel {
  @Column()
  label: string;

  @Column()
  description: string;
}
