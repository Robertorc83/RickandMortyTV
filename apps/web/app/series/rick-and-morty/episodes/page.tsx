"use client"
import { Box, CircularProgress, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { Button } from '@mui/material';
import useEpisodesPagination from '../../../../hooks/useEpisodesPagination';


export default function Episodes() {
  const { loading, data, setPage, page } = useEpisodesPagination();

  if (loading) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <CircularProgress />
    </Box>
  );

  const handlePreviousPage = () => {
    setPage(page - 1)
  }

  const handleNextPage = () => {
    setPage(page + 1)
  }

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '64px' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Episodes
      </Typography>
      {data?.episodes?.map(({ id, name, episode }) => (
        <Link key={id} href={`episodes/${id}`}>
          <span style={{ textDecoration: 'none' }}>
            <Typography variant="h6" component="h3" gutterBottom>
              {name} ({episode})
            </Typography>
          </span>
        </Link>
      ))}
      <Box my={2}>
        <Button disabled={page <= 1} onClick={handlePreviousPage}>
          Previous Page
        </Button>
        <Button onClick={handleNextPage} style={{ marginLeft: '10px' }}>
          Next Page
        </Button>
      </Box>
    </Container>
  );
}