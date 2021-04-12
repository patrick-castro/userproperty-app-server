const mongoose = require('mongoose');

// Wrapped around the async block to wait for the mongoose to finish
// connecting to the mongodb data before connecting to express
const connectMongoose = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true, // Creates index when mongoose is working with mongodb
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('Successfully connected to database!');
  } catch (error) {
    console.log(error);
  }
};

connectMongoose();
