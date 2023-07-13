const express = require('express');
const cors = require('cors');
const startServer = require('./src/interfaces/graphql/startServer');

const app = express();
app.use(cors());

const port = 4000; // consider using different ports for different services

startServer(app)
  .then(server => {
    app.listen(port, () => {
      console.log(`GraphQL running at http://localhost:${port}${server.graphqlPath}`);
    });
  })
  .catch(err => {
    console.error('Failed to start GraphQL server', err);
    process.exit(1);
  });