const { ApolloError } = require('apollo-server-express');

async function getEpisode(fetchEpisode, id) {
  try {
    const episode = await fetchEpisode(id);
    return episode;
  } catch (error) {
    console.error('Error in getEpisode:', error.message);
    throw new ApolloError('An error occurred while fetching an episode');
  }
}

module.exports = getEpisode;