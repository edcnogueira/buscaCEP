import { Box, ChakraProvider, Grid, theme } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import BuscarCEP from './components/BuscaCEP';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <BuscarCEP />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
