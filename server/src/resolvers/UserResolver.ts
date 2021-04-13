import "reflect-metadata";
import {
  Resolver,
  Mutation,
  Arg,
  InputType,
  Field,
  Ctx,
  Query,
} from "type-graphql";
import { User } from "../entities/User";
import { Context } from "../context";

@InputType()
class PostInput {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field(() => Boolean, { nullable: true })
  published?: boolean;
}

@InputType()
class PostUpdateInput {
  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  content?: string;

  @Field(() => Boolean, { nullable: true })
  published?: boolean;
}

@Resolver()
export class PostResolver {
  @Mutation(() => Post)
  async createPost(
    @Arg("options", () => PostInput) options: PostInput,
    @Ctx() ctx: Context
  ): Promise<Post | null> {
    const post = await ctx.prisma.post.create({
      data: {
        title: options.title,
        content: options.content,
        published: options.published,
      },
    });
    return post;
  }

  @Query(() => [Post])
  posts(@Ctx() ctx: Context) {
    return ctx.prisma.post.findMany();
  }
}
