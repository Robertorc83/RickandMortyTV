import * as React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ p: 3, position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#3f51b5', color: '#fff' }}>
      <Typography variant="body1" align="center">
        Created by @Roberto Espinoza
      </Typography>
    </Box>
  );
}

export default Footer;