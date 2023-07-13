import { gql } from '@apollo/client';

export const EPISODES_QUERY = gql`
  query GetEpisodes($page: Int!) {
    episodes(page: $page) {
      id
      name
      episode
    }
  }
`;

export const EPISODE_QUERY = gql`
  query GetEpisode($id: ID!) {
    episode(id: $id) {
      id
      name
      episode
    }
  }
`;