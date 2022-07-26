import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { Posts } from "../../Entities/Posts";
import { PostType } from "../TypeDefs/Post";

export const GET_ALL_POSTS = {
  type: new GraphQLList(PostType),
  resolve() {
    return Posts.find();
  },
};

export const GET_POST = {
  type: PostType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  async resolve(_: any, args: any) {
    const result = await Posts.findOneBy({ id: args.id });
    return result;
  },
};
