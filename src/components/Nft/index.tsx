import { Box, Image, Text } from '@chakra-ui/react';

import React from 'react';
import { Gateway } from 'utils/consts';
import { INft } from './interfaces';

export const Nft: React.FC<INft> = ({ data }) => {
  if (data === null || typeof data === 'undefined') return null;
  const image = data.image;
  const imgSrc = Gateway + image.slice(12, data.image.length);
  return (
    <Box align="center" m="10" mx="auto" maxW="xl">
      <Image src={imgSrc} maxW="xl" alt={data.name} />
      <Text as="h1" fontSize="2xl">
        {data.name}
      </Text>
      <Text as="p">{data.description}</Text>
    </Box>
  );
};
