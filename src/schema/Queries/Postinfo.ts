import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { Postinfos } from "../../Entities/Postinfos";
import { PostinfoType } from "../TypeDefs/Postinfo";

export const GET_ALL_POST_INFOS = {
  type: new GraphQLList(PostinfoType),
  resolve() {
    return Postinfos.find();
  },
};

export const GET_POST_INFO = {
  type: PostinfoType,
  args: {
    postId: { type: new GraphQLNonNull(GraphQLID) },
  },
  async resolve(_: any, args: any) {
    const result = await Postinfos.findOneBy({ postId: args.postId });
    return result;
  },
};
