import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Review } from './review.entity';

@Entity({ name: 'book' })
@ObjectType()
export class Book {
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

  @Column()
  @Field()
  description: string;

  @OneToMany(() => Review, (review) => review.book, {})
  @Field(() => [Review], { nullable: true })
  reviews: Review[];
}
