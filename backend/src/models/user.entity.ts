import { Field, ObjectType } from '@nestjs/graphql';
import { Review } from 'src/book/entities/review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'user' })
export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('text')
  username: string;

  @Field()
  @Column('text')
  email: string;

  @Field()
  @Column('text')
  password: string;

  @Field(() => [Review])
  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];
}
