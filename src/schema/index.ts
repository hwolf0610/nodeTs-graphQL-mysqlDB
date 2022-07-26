import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_USERS, GET_USER } from "./Queries/User";
import { GET_ALL_POSTS, GET_POST } from "./Queries/Post";
import { GET_ALL_POST_INFOS, GET_POST_INFO } from "./Queries/Postinfo";
import { GET_ALL_COMMENTS, GET_COMMENT } from "./Queries/Comment";
import { GET_ALL_COMMENT_INFOS, GET_COMMENT_INFO } from "./Queries/Commentinfo";

import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./Mutations/User";
import { CREATE_POST, UPDATE_POST, DELETE_POST } from "./Mutations/Post";
import { CREATE_COMMENT, UPDATE_COMMENT, DELETE_COMMENT } from "./Mutations/Comment";
import { CREATE_POST_INFO } from "./Mutations/Postinfo";
import { CREATE_COMMENT_INFO } from "./Mutations/Commentinfo";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USERS,
    getUser: GET_USER,
    getAllPosts: GET_ALL_POSTS,
    getPost: GET_POST,
    getAllPostinfos: GET_ALL_POST_INFOS,
    getPostinfo: GET_POST_INFO,
    getAllComments: GET_ALL_COMMENTS,
    getComment: GET_COMMENT,
    getAllCommentinfos: GET_ALL_COMMENT_INFOS,
    getCommentinfo: GET_COMMENT_INFO,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updateUser: UPDATE_USER,
    createPost: CREATE_POST,
    updatePost: UPDATE_POST,
    deletePost: DELETE_POST,
    createPostinfo: CREATE_POST_INFO,
    createComment: CREATE_COMMENT,
    updateComment: UPDATE_COMMENT,
    deleteComment: DELETE_COMMENT,
    createCommentinfo: CREATE_COMMENT_INFO,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
