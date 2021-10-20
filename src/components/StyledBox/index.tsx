import { Box } from '@chakra-ui/react';
import React from 'react';

export const StyledBox = ({ children }) => (
  <Box justifyContent="center" textAlign="center" my="5">
    {children}
  </Box>
);
