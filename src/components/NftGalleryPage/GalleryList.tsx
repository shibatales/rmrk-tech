import { Box, Container, chakra } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import useSWR from 'swr';
import { Page } from 'components/Pagination/Page';
import PageControl from 'components/Pagination/PageControl';
import { usePageControl } from 'utils/usePageControl';
import { RmrkApi } from 'utils/consts';
import { StyledBox } from 'components/StyledBox';

export const GalleryList: NextPage = () => {
  const currentPage = usePageControl(React.useCallback((state) => state.currentPage, []));
  const { data, error, isValidating } = useSWR(RmrkApi);

  if (error) return <StyledBox>An error has occurred.</StyledBox>;
  if (!data || isValidating) return <StyledBox>Loading...</StyledBox>;

  const TotalPages = Math.floor(data.length / 20);
  return (
    <Container maxW="full" align="center">
      <Head>
        <title>Singular</title>
      </Head>
      <Box my="5">
        <chakra.h1>Gallery List Demo</chakra.h1>
        <PageControl index={currentPage} totalPages={TotalPages} />
        <Page index={currentPage} />
      </Box>
    </Container>
  );
};
