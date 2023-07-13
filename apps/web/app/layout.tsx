import {Header} from 'ui'
import {Footer} from 'ui'
import { ApolloWrapper } from '../lib/apollo-wrapper';
import './globals.css';
import { Box } from '@mui/material';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">  
      <body>
      <Header/>
      <Box sx={{ paddingBottom: '60px', paddingTop: '60px' }}> {/* height of footer */}
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
      </Box>
      <Footer/>
      </body>
    </html>
  );
}
