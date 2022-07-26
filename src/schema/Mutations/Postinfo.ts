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
import { Postinfos } from "../../Entities/Postinfos";
import { PostinfoType } from "../TypeDefs/Postinfo";
import { MessageType } from "../TypeDefs/Message";

export const CREATE_POST_INFO = {
  type: PostinfoType,
  args: {
    postId: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent: any, args: any) {
    const { userId, postId } = args;

    const result = await Postinfos.insert({
      postId,
      userId,
    });

    return { ...args, postId: result.identifiers[0].postId };
  },
};
