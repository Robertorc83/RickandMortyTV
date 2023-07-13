import * as React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
          Rick and Morty TV
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;