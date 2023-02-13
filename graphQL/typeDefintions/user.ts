import { GraphQLObjectType, GraphQLString } from "graphql";

//===Type definitions
const userType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    firstName: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
  }),
});

const userType2 = new GraphQLObjectType({
  name: "user2",
  fields: () => ({
    fullName: {
      type: GraphQLString,
    },
  }),
});

const qualType = new GraphQLObjectType({
  name: "qualification",
  fields: () => ({
    qualName: {
      type: GraphQLString,
    },
    instituteName: {
      type: GraphQLString,
    },
  }),
});

export { userType, userType2, qualType };
