// Create express app
const express = require("express");
const app = express();

// Enable cors
// Allows cross origin resource sharing, which means requests are allowed from
// origins other than where this api is hosted. An origin is a resource hosted
// at a specific scheme, host, and port. For example, if someone is using a
// javascript web app hosted at https://web-app.com:80, the javascript could
// make cross-origin requests to a cors-enabled api hosted at
// https://api.com:3000. Cors is necessary for SPAs that are statically hosted
// somewhere besides where their apis are.
const cors = require("cors");
app.use(cors());

// Create our apollo server and apply it's middleware to our express app.
const apolloServer = require("./createApolloServer")();
apolloServer.applyMiddleware({ app });

app.listen("3000", () => console.log("Send queries or go to http://localhost:3000/graphql with your browser"));
