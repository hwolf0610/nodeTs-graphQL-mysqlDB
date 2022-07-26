import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const PostinfoType = new GraphQLObjectType({
  name: "Postinfo",
  description: "Postinfo Type Definition",
  fields: () => ({
    postId: { type: GraphQLID },
    userId: { type: GraphQLID },
  }),
});
