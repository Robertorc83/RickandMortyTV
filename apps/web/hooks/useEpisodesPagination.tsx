import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import { EPISODES_QUERY } from '../graphql/queries/episodesQueries';

type Episode = {
  id: string;
  name: string;
  episode: string;
};

type EpisodesData = {
  episodes: Episode[];
};

export default function useEpisodesPagination() {
  const [page, setPage] = useState<number>(1);
  
  const { loading, data } = useQuery<EpisodesData>(EPISODES_QUERY, {
    variables: { page },
    fetchPolicy: 'network-only',
  });

  return { loading, data, setPage, page };
}