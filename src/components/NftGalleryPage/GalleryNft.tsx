import { AspectRatio, Box, Image, Skeleton, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';
import { IGalleryNft } from './interfaces';
import { MotionBox } from 'components/MotionBox';
import { Gateway } from 'utils/consts';
import { useIpfsStore } from 'utils/useIpfsStore';

export default function GalleryNft(nft: IGalleryNft) {
  const [ipfsImg, setIpfsImg] = React.useState('');
  const url = nft.metadata.toString();
  const cidx = 12;
  const CID = url.slice(cidx, url.length);
  const nftLink = `/nft/` + CID;
  const imgSrc = Gateway + CID;
  const res = useIpfsStore(React.useCallback((state) => state.fetchIpfs, []));
  React.useEffect(() => {
    res(imgSrc);
  }, [imgSrc]);
  const store = useIpfsStore(React.useCallback((state) => state.storedIpfs, []));
  React.useEffect(() => {
    const img = store[imgSrc]?.image;
    if (typeof store[imgSrc] !== 'undefined' && img) {
      const srcUrl = Gateway + img.slice(12, img.length);
      setIpfsImg(srcUrl);
    }
  }, [imgSrc, store, store[imgSrc], store[imgSrc]?.image]);
  return (
    <Stack spacing={{ base: '3', md: '5' }}>
      <Link href={nftLink} passHref>
        <MotionBox whileHover={{ scale: 1.05, cursor: 'pointer' }}>
          <Box position="relative" borderRadius="md">
            <AspectRatio ratio={3 / 4}>
              <Image
                src={ipfsImg}
                alt={nft.name}
                fit="contain"
                draggable="false"
                fallback={<Skeleton startColor="brand.900" endColor="brand.700" />}
              />
            </AspectRatio>
          </Box>
          <Box minH="90px" p="3" textAlign="left" bg="brand.900" color="brand.100" marginTop="3px">
            <Text fontSize="xs" color="#CCCCCC">
              {nft.sn}
            </Text>
            <Text fontWeight="bold">{nft.name}</Text>
          </Box>
        </MotionBox>
      </Link>
    </Stack>
  );
}
