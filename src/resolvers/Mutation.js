const User = require('../models/user');
const Property = require('../models/property');

const Mutation = {
  addUser: async (parent, { input }, ctx) => {
    try {
      const user = await User.create(input);
      return user;
    } catch (error) {
      throw new Error(err);
    }
  },
  addProperty: async (parent, { input, ctx }) => {
    try {
      const property = await Property.create(input);
      return property;
    } catch (error) {
      throw new Error(err);
    }
  },
};

module.exports = Mutation;
