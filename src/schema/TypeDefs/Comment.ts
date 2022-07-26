import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const CommentType = new GraphQLObjectType({
  name: "Comment",
  description: "Comment Type Definition",
  fields: () => ({
    id: { type: GraphQLID },
    description: { type: GraphQLString },
    commentDate: { type: GraphQLString },
  }),
});
