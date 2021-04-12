const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// Local imports
require('./db/mongoose'); // Starts the connection with mongoose
const typeDefs = require('./schema/schema');
const Query = require('./resolvers/Query');
const User = require('./resolvers/User');

const resolvers = {
  Query,
  User,
};

const port = process.env.PORT || 4000;

const startApolloServer = async () => {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();

  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen({ port }, resolve));
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  );
  return { server, app };
};

startApolloServer();
