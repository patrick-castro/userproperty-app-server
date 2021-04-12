import express from 'express';
import { ApolloServer } from 'apollo-server-express';

// Local imports
import './db/mongoose'; // Starts the connection with mongoose
import typeDefs from './schema/schema';
import Query from './resolvers/Query';
import User from './resolvers/User';

const resolvers = {
  Query,
  User,
};

const port = process.env.PORT;

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
