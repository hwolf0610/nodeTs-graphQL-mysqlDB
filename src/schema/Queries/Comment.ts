import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { Comments } from "../../Entities/Comments";
import { CommentType } from "../TypeDefs/Comment";

export const GET_ALL_COMMENTS = {
  type: new GraphQLList(CommentType),
  resolve() {
    return Comments.find();
  },
};

export const GET_COMMENT = {
  type: CommentType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  async resolve(_: any, args: any) {
    const result = await Comments.findOneBy({ id: args.id });
    return result;
  },
};
