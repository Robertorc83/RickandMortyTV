"use client"
import { useQuery } from '@apollo/client';
import { Box, CircularProgress, Container, Typography } from '@mui/material';
import { useVideoUrl } from '../../../../../hooks/useVideoUrl';
import { EPISODE_QUERY } from '../../../../../graphql/queries/episodesQueries';

export default function Episode({ params }) {
  const { id } = params;

  const { loading: episodeLoading, error: episodeError, data: episodeData } = useQuery(EPISODE_QUERY, {
    variables: { id },
  });

  const videoUrl = useVideoUrl('example.mp4');
  
  if (episodeLoading || !videoUrl) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress />
    </Box>
  );
  if (episodeError) return `Error! ${episodeError.message}`;

  return (
    <Container>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Typography variant="h4" component="h2">
          {episodeData.episode.name} ({episodeData.episode.episode})
        </Typography>
        <Box my={2}>
          <Typography variant="body1">
            Episode ID: {episodeData.episode.id}
          </Typography>
        </Box>
        <div>
          <video width="320" height="240" controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Box>
    </Container>
  );
}