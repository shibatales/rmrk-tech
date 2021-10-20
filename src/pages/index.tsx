import { GalleryList } from 'components/NftGalleryPage/GalleryList';
import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';
import { SWRConfig } from 'swr';
import { RmrkApi } from 'utils/consts';
import { fetcher } from 'utils/fetcher';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const result = await fetcher(RmrkApi);
  context.res.setHeader('Cache-Control', 'max-age=60, public, stale-while-revalidate');
  return {
    props: {
      fallback: {
        [RmrkApi]: result,
      },
    },
  };
};
export default function Home({ fallback }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <SWRConfig value={{ fallback }}>
      <GalleryList />
    </SWRConfig>
  );
}
