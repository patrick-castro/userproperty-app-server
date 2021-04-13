// Local imports
const Property = require('../models/property');

const User = {
  // Returns the properties associated with the user
  properties: async ({ _id }, args, ctx) => {
    try {
      const properties = await Property.find({ owner: _id });
      return properties;
    } catch (err) {
      throw new Error(err);
    }
  },
  fullName: async ({ firstName, lastName }, args, ctx) => {
    return `${firstName} ${lastName}`;
  },
};

module.exports = User;
