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
    owner: String!
  }

  type Query {
    users(searchString: String!): [User!]!
    allUsers: [User!]!
  }

  input AddUserInput {
    firstName: String!
    lastName: String!
  }
  input addPropertyInput {
    street: String!
    city: String!
    state: String!
    zip: String!
    rent: Float!
    owner: String!
  }

  type Mutation {
    addUser(input: AddUserInput): User
    addProperty(input: addPropertyInput): Property
  }
`;

module.exports = typeDefs;
