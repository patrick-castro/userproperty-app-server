// Local imports
import Property from '../models/property';

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
};

export default User;
