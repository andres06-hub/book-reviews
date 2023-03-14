import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Review } from './review.entity';
import { BookInterface } from '../interfaces/book.interface';

@Entity({ name: 'book' })
@ObjectType()
export class Book implements BookInterface {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  linkImg: string;

  @Column()
  @Field()
  author: string;

  @Column({
    type: 'varchar',
  })
  @Field()
  description: string;

  @OneToMany(() => Review, (review) => review.book, { nullable: true })
  @Field(() => [Review], { nullable: true })
  reviews: Review[];

  constructor(
    id: number,
    description: string,
    author: string,
    title: string,
    linkImg: string,
  ) {
    // const { id, title, description, author, linkImg } = data;
    this.id = id;
    this.description = description;
    this.author = author;
    this.linkImg = linkImg;
    this.title = title;
  }
}
