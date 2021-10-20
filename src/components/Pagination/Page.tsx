import { GridItem, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import useSWR from 'swr';
import paginate from 'utils/paginate';
import { IPage } from './interfaces';
import { IGalleryNft } from 'components/NftGalleryPage/interfaces';
import GalleryNft from 'components/NftGalleryPage/GalleryNft';
import { RmrkApi } from 'utils/consts';
import { StyledBox } from 'components/StyledBox';

export const Page: React.FC<IPage> = ({ index }) => {
  const { data, error, isValidating } = useSWR(RmrkApi);

  if (error) return <StyledBox>An error has occurred.</StyledBox>;
  if (!data || isValidating) return <StyledBox>Loading...</StyledBox>;
  if (data.length === 0) return <StyledBox>Nothing to display.</StyledBox>;

  const CurrentDisplay = paginate(data, 20, index).map((item: IGalleryNft) => (
    <GridItem key={item.id}>
      <GalleryNft {...item} />
    </GridItem>
  ));
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 5 }} gap={{ base: '6', lg: '8' }}>
      {CurrentDisplay}
    </SimpleGrid>
  );
};
