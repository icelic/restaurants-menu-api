import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from './BaseModel';
import { Restaurant } from './Restaurant';
import { Attachment } from './Attachment';

@Entity()
export class Menu extends BaseModel {
  @Column()
  label: string;

  @ManyToOne((type) => Restaurant, (restaurant) => restaurant.menus)
  restaurant: Restaurant;

  @OneToMany((type) => Attachment, (attachment) => attachment.menu)
  attachments: Attachment[];
}
