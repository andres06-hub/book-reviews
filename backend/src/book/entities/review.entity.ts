import { User } from 'src/models/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book.entity';
import { ObjectType, Field } from '@nestjs/graphql';

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

  @ManyToOne(() => User, (user) => user.reviews)
  @Field(() => User)
  user: User;

  @ManyToOne(() => Book, (book) => book.reviews)
  @Field(() => Book)
  book: Book;
}
