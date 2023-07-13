const { ApolloError } = require('apollo-server-express');

const getEpisodes = (fetchEpisodes, page) => {
  return async () => {
    try {
      const episodes = await fetchEpisodes(page);
      return episodes;
    } catch (error) {
      console.error('Error in getEpisodes:', error.message);

      throw new ApolloError('An error occurred while fetching episodes');
    }
  };
};

module.exports = getEpisodes;