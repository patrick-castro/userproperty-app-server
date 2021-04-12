// Local imports
const User = require('../models/user');

const Query = {
  users: async (parent, { searchString }) => {
    try {
      // Query users with either the firstName, lastName, or the combination of the firstName and lastName that matches
      // the searchString
      const users = await User.find({
        $expr: {
          $regexMatch: {
            input: { $concat: ['$firstName', ' ', '$lastName'] },
            regex: new RegExp(searchString, 'i'),
          },
        },
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
