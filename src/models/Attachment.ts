import { Column, Entity } from 'typeorm';
import { BaseModel } from './BaseModel';

@Entity()
export class Attachment extends BaseModel {
  @Column()
  url: string;
}
