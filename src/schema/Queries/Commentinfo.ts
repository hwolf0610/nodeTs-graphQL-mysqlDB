import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { Commentinfos } from "../../Entities/Commentinfos";
import { CommentinfoType } from "../TypeDefs/Commentinfo";

export const GET_ALL_COMMENT_INFOS = {
  type: new GraphQLList(CommentinfoType),
  resolve() {
    return Commentinfos.find();
  },
};

export const GET_COMMENT_INFO = {
  type: CommentinfoType,
  args: {
    commentId: { type: new GraphQLNonNull(GraphQLID) },
  },
  async resolve(_: any, args: any) {
    const result = await Commentinfos.findOneBy({ commentId: args.commentId });
    return result;
  },
};
