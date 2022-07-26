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
import { Commentinfos } from "../../Entities/Commentinfos";
import { CommentinfoType } from "../TypeDefs/Commentinfo";
import { MessageType } from "../TypeDefs/Message";

export const CREATE_COMMENT_INFO = {
  type: CommentinfoType,
  args: {
    commentId: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: new GraphQLNonNull(GraphQLString) },
    postId: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent: any, args: any) {
    const { userId, postId, commentId } = args;

    const result = await Commentinfos.insert({
      commentId,
      userId,
      postId,
    });

    return { ...args, commentId: result.identifiers[0].commentId };
  },
};
