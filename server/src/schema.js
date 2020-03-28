const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    restaurantsList: [Restaurant]!
    restaurant(id: ID!): Restaurant
  }

  type Restaurant {
    id: ID!
    name: String
    description: String
    address: String
    website: String
    avatar: String
  }
`;

module.exports = typeDefs;
