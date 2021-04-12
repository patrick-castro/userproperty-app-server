const mongoose = require('mongoose');

const propertySchema = mongoose.Schema({
  street: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  zip: {
    type: String,
    required: true,
    trim: true,
  },
  rent: {
    type: Number,
    required: true,
    default: 0,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId, // Data stored in owner is an object id
    required: true,
    ref: 'User', // Reference to the user
  },
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;
