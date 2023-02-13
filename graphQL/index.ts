import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GetAllUsers, GetAllUsers2 } from "./queries/userQuery";
import { CreateQualType } from "./mutations/userMutation";

const rootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GetAllUsers,
    getAllUsers2: GetAllUsers2,
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createQualType: CreateQualType,
  },
});

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: mutation,
});

export default schema;
