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
import { Comments } from "../../Entities/Comments";
import { Commentinfos } from "../../Entities/Commentinfos";
import { CommentType } from "../TypeDefs/Comment";
import { MessageType } from "../TypeDefs/Message";

export const CREATE_COMMENT = {
  type: CommentType,
  args: {
    description: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: new GraphQLNonNull(GraphQLString) },
    postId: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent: any, args: any) {
    const { description, userId, postId } = args;

    const result = await Comments.insert({
      description,
      commentDate: new Date().toString(),
    });

    if (result.identifiers[0]) {
      const resultCommentInfo = await Commentinfos.insert({
        commentId: result.identifiers[0].id,
        userId,
        postId,
      });

      return { ...args, id: result.identifiers[0].id, description: description };
    } else {
      return false;
    }
  },
};

export const UPDATE_COMMENT = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
    input: {
      type: new GraphQLInputObjectType({
        name: "CommentInput",
        fields: () => ({
          description: { type: GraphQLString },
        }),
      }),
    },
  },
  async resolve(_: any, { id, input }: any) {
    const userFound = await Comments.findOneBy({ id });
    if (!userFound) throw new Error("Comment not found");

    const response = await Comments.update({ id }, input);

    if (response.affected === 0) return { message: "Comment not found" };

    return {
      success: true,
      message: "Update Comment successfully",
    };
  },
};

export const DELETE_COMMENT = {
  type: MessageType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  async resolve(_: any, { id }: any) {
    const result = await Comments.delete({ id });
    if (result.affected === 0) return { message: "Comment not found" };

    return {
      success: true,
      message: "Delete Comment successfully",
    };
  },
};