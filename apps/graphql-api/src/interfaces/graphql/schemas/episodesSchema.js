const { gql } = require('apollo-server-express');

const episodeSchema = gql`
  type Episode {
    id: ID!
    name: String!
    episode: String!
  }

  type Query {
    episodes(page: Int!): [Episode]
    episode(id: ID!): Episode
  }
`;

module.exports = episodeSchema;