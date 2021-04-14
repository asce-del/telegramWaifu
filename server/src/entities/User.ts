import 'reflect-metadata'
import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export class User {
  @Field((type) => ID)
  id: number

  @Field((type) => String)
  fname!: string

  @Field((type) => String)
  lname!: string

  @Field((type) => String)
  email!: string

  @Field((type) => String)
  password!: string
}