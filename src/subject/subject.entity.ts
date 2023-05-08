import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
//import * as crypto from 'crypto';

@Entity('subject')
export class SubjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  status: string;

  @Column()
  file_name: string;
}
