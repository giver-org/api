// Create express app
const express = require("express");
const app = express();

// Enable cors
const cors = require("cors");
app.use(cors());

// Create our apollo server and apply it's middleware to our express app.
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { ApolloServer } = require("apollo-server-express");
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app });

// Start the express server.
app.listen("3000", () => console.log("Send queries or go to http://localhost:3000/graphql with your browser"));
