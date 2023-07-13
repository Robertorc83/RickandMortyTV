const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schemas/episodesSchema');
const resolvers = require('./resolvers/episodesResolvers');

const startServer = async (app) => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  return server;
};

module.exports = startServer;