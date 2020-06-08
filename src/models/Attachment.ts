import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from './BaseModel';
import { Menu } from './Menu';

@Entity()
export class Attachment extends BaseModel {
  @Column()
  url: string;

  @ManyToOne((type) => Menu, (menu) => menu.attachments)
  menu: Menu;
}
