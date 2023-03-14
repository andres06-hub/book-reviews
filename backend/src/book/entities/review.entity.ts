import { User } from 'src/models/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';
import { Book } from './book.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@Entity({ name: 'review' })
@ObjectType()
export class Review {
  @PrimaryGeneratedColumn('uuid', {
    name: 'id',
  })
  @Field()
  id: string;

  @Column()
  @Field()
  comment: string;

  @Column({
    default: 1,
  })
  @Field(() => Int)
  rating: number;

  @ManyToOne(() => User, (user) => user.reviews)
  @Field(() => User)
  user: User;

  @ManyToOne(() => Book, (book) => book.reviews)
  @Field(() => Book)
  book: Book;

  @CreateDateColumn({
    type: 'timestamp',
  })
  @Field(() => Int)
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  @Field()
  updateAt: Date;
}
