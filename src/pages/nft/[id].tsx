import { Nft } from 'components/Nft';
import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { Gateway } from 'utils/consts';
import { useIpfsStore } from 'utils/useIpfsStore';

export default function NftDetailPage() {
  const router = useRouter();
  const nftId = router.query.id;
  const ipfsKey = Gateway + nftId;
  const store = useIpfsStore(React.useCallback((state) => state.storedIpfs, []));
  const data = store[ipfsKey];
  return <Nft data={data} />;
}
