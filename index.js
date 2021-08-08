const { ApolloServer, gql } = require('apollo-server');
const SessionAPI = require('./datasources/sessions');
const sessions = require('./data/sessions.json');
const typeDefs = require('./schema.js');

const resolvers = require('./resolvers.js');

const dataSources = () => ({
    sessionAPI: new SessionAPI()
});
const server = new ApolloServer({ typeDefs, resolvers, dataSources, introspection:true });

server
  .listen({ port: process.env.PORT || 4000 })
  .then(({ url }) => {
    console.log(`graphQL running at ${url}`);
  })