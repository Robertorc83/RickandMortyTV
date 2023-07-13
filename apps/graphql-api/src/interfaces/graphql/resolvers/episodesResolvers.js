const getEpisodes = require('../../../core/use_cases/episodes/getEpisodes');
const getEpisode = require('../../../core/use_cases/episodes/getEpisode');
const { fetchEpisodes, fetchEpisode } = require('../../../infrastructure/services/episodeService');

const resolvers = {
  Query: {
    episodes: (_, { page }) => getEpisodes(fetchEpisodes, page)(),
    episode: (_, { id }) => getEpisode(fetchEpisode, id),
  },
};

module.exports = resolvers;