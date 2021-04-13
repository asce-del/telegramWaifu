import 'reflect-metadata'
import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export class User {
  @Field((type) => ID)
  id: number

  @Field()
  fname: string

  @Field((type) => String, { nullable: true })
  lname: string | null

  @Field((type) => Boolean, { nullable: true })
  email?: boolean | null

  @Field((type) => Boolean, { nullable: true })
  password?: boolean | null
}