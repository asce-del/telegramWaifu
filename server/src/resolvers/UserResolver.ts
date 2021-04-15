import "reflect-metadata";
import {
  Resolver,
  Mutation,
  Arg,
  Field,
  Ctx,
  Query,
  ObjectType,
} from "type-graphql";
import argon2 from "argon2";
import { User } from "../entities/User";
import { Context } from "../context";
import { UserInput } from "./UserInput";
import { validateRegsiter } from "../utils/validateRegister";

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  me(@Ctx() { req, prisma }: Context) {
    console.log(req.session)
    if (!req.session.userId) {
      return null;
    }
    return prisma.user.findUnique({ where: { id: req.session.userId } });
  }

  @Mutation(() => UserResponse)
  async createUser(
    @Arg("options", () => UserInput) options: UserInput,
    @Ctx() { req, prisma }: Context
  ): Promise<UserResponse> {
    const errors = validateRegsiter(options);

    if (errors) {
      console.log(errors);
      return { errors };
    }

    const hashedPassword = await argon2.hash(options.password);

    const exist = await prisma.user.findUnique({
      where: {
        email: options.email,
      },
    });

    if (exist) {
      return {
        errors: [
          {
            field: "username",
            message: "username or email already taken",
          },
        ],
      };
    }

    const user = await prisma.user.create({
      data: {
        fname: options.fname,
        lname: options.lname,
        email: options.email,
        password: hashedPassword,
      },
    });

    req.session.userId = user.id;

    console.log(req.session)

    return { user };
  }
}
