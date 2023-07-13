const axios = require('axios');

async function fetchEpisodes(page = 1) {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}`);
    return response.data.results;
  } catch (error) {
    console.error('error fetching episodes', error);
  }
}

async function fetchEpisode(episodeId) {
  const response = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeId}`);
  return response.data;
}

module.exports = {
  fetchEpisodes,
  fetchEpisode,
};