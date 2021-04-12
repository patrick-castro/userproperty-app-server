import mongoose from 'mongoose';

// Wrapped around the async block to wait for the mongoose to finish
// connecting to the mongodb data before connecting to express
const connectMongoose = async () => {
  mongoose.connect('mongodb://127.0.0.1:27017/user-properties-api', {
    useNewUrlParser: true,
    useCreateIndex: true, // Creates index when mongoose is working with mongodb
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
};

connectMongoose();
