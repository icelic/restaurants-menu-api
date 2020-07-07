import { Column, Entity } from 'typeorm';
import { BaseModel } from './BaseModel';

@Entity()
export class User extends BaseModel {
  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  photoUrl: string;

  @Column()
  isStaff: boolean;

  @Column()
  password: string;

  token: string;
}
