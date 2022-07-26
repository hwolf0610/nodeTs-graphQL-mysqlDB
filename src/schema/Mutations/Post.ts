import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  graphqlSync,
} from "graphql";
import { Posts } from "../../Entities/Posts";
import { Postinfos } from "../../Entities/Postinfos";
import { PostType } from "../TypeDefs/Post";
import { MessageType } from "../TypeDefs/Message";

export const CREATE_POST = {
  type: PostType,
  args: {
    title: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent: any, args: any) {
    const { title, description, userId } = args;

    const result = await Posts.insert({
      title,
      description,
      postDate: new Date().toString(),
    });

    if (result.identifiers[0]) {
      const resultPostInfo = await Postinfos.insert({
        postId: result.identifiers[0].id,
        userId,
      });

      return { ...args, id: result.identifiers[0].id, title: title, description: description };
    } else {
      return false;
    }
  },
};

export const UPDATE_POST = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
    input: {
      type: new GraphQLInputObjectType({
        name: "PostInput",
        fields: () => ({
          title: { type: GraphQLString },
          description: { type: GraphQLString },
        }),
      }),
    },
  },
  async resolve(_: any, { id, input }: any) {
    const userFound = await Posts.findOneBy({ id });
    if (!userFound) throw new Error("Post not found");

    const response = await Posts.update({ id }, input);

    if (response.affected === 0) return { message: "Post not found" };

    return {
      success: true,
      message: "Update Post successfully",
    };
  },
};

export const DELETE_POST = {
  type: MessageType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  async resolve(_: any, { id }: any) {
    const result = await Posts.delete({ id });
    if (result.affected === 0) return { message: "Post not found" };

    return {
      success: true,
      message: "Delete Post successfully",
    };
  },
};
