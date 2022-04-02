import { Box, ChakraProvider, Grid, GridItem, theme } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import BuscarCEP from './components/BuscaCEP';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="50vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <GridItem w="100%" h="100%">
            <BuscarCEP />
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
