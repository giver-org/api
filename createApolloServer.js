const { ApolloServer, gql } = require("apollo-server-express");

module.exports = function createApolloServer() {
  // A schema is a collection of type definitions (hence "typeDefs")
  // that together define the "shape" of queries that are executed against
  // your data.
  const typeDefs = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    age: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.
  type Query {
    user(id: ID): User
  }
`;

  // Grab placeholder models
  const model = require("./model");
  const resolvers = {
    Query: {
      user: (parent, args, context, info) => model.getUser(args.id),
    },
  };

  return new ApolloServer({ typeDefs, resolvers, });
};
