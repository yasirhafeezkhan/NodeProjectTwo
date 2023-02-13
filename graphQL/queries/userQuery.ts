import registration from "../../models/Registration";
import { GraphQLList } from "graphql";
import { userType, userType2 } from "../typeDefintions/user";
//===queries
const GetAllUsers = {
  type: GraphQLList(userType),
  resolve(): object {
    return registration.findAll();
  },
};

const GetAllUsers2 = {
  type: GraphQLList(userType2),
  resolve(): object {
    return registration.findAll();
  },
};

export { GetAllUsers, GetAllUsers2 };
