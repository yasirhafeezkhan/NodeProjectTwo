import { GraphQLString } from "graphql";
import qualification from "../../models/Qualification";
import { qualType } from "../typeDefintions/user";
export const CreateQualType = {
  type: qualType,
  args: {
    qualName: { type: GraphQLString },
    instituteName: { type: GraphQLString },
  },
  async resolve(parent: any, args: any): Promise<string> {
    const { qualName, instituteName } = args;
    await qualification.create(args);
    return "Created Successfully";
  },
};
