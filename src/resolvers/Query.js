// Local imports
const User = require('../models/user');

const Query = {
  users: async (parent, { searchString }) => {
    try {
      // Query users with either the firstName or lastName that matches
      // the searchString
      const users = await User.find({
        $or: [
          { firstName: new RegExp(searchString, 'i') },
          { lastName: new RegExp(searchString, 'i') },
        ],
      });

      return users;
    } catch (err) {
      throw new Error(err);
    }
  },
  allUsers: async (parent, args, ctx) => {
    try {
      const users = await User.find({});
      return users;
    } catch (error) {
      throw new Error(err);
    }
  },
};

module.exports = Query;
