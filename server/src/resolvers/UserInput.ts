import {
    InputType,
    Field
  } from "type-graphql";
  

@InputType()
export class UserInput {
  @Field()
  fname: string;

  @Field()
  lname: string;

  @Field()
  email: string;

  @Field()
  password: string;
}