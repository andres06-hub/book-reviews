import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateBookInput {
  @IsNotEmpty({ message: 'Required field' })
  @Field()
  title: string;
  @Field()
  linkImg: string;
  @IsNotEmpty({ message: 'Required field' })
  @Field()
  author: string;
  @IsNotEmpty({ message: 'Required field' })
  @Field()
  description: string;
}
