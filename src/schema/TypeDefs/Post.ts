import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const PostType = new GraphQLObjectType({
  name: "Post",
  description: "Post Type Definition",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    postDate: { type: GraphQLString },
  }),
});
