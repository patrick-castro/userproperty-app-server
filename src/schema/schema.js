const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String!
    lastName: String!
    properties: [Property!]! # GraphQL Object Type
  }

  type Property {
    id: ID!
    street: String!
    city: String!
    state: String!
    zip: String!
    rent: Float!
  }

  type Query {
    users(searchString: String!): [User!]!
  }
`;

module.exports = typeDefs;
