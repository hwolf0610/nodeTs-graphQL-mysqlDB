import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const CommentinfoType = new GraphQLObjectType({
  name: "Commentinfo",
  description: "Commentinfo Type Definition",
  fields: () => ({
    commentId: { type: GraphQLID },
    userId: { type: GraphQLID },
    postId: { type: GraphQLID },
  }),
});
