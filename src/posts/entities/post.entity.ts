import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  slug: string;

  @Column()
  body: string;
}
