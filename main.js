// Create express app
const express = require('express');
const app = express();

// Grab placeholder models
const model = require('./model');

// Enable cors
// Allows cross origin resource sharing, which means requests are allowed from
// origins other than where this api is hosted. An origin is a resource hosted
// at a specific scheme, host, and port. For example, if someone is using a
// javascript web app hosted at https://web-app.com:80, the javascript could
// make cross-origin requests to a cors-enabled api hosted at
// https://api.com:3000. Cors is necessary for SPAs that are statically hosted
// somewhere besides where their apis are.
const cors = require('cors');
app.use(cors());

// Initalized request validator generated from openapi spec
const openapiValidator = require('openapi-validator-middleware');
openapiValidator.init('openapi.yaml');

app.get('/user/:id', openapiValidator.validate, (req, res) => {
  const id = req.params.id;
  const user = model.getUser(id);
  res.json(user);
});

// Openapi generated validator error handler
app.use((err, req, res, next) => {
  if (err instanceof openapiValidator.InputValidationError) {
    return res.status(400).json({ inputValidationErrors: err.errors });
  }
  next(err);
});

app.listen('3000', () => console.log('listening on localhost:3000'));