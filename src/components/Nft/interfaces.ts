import { IGalleryNft, IIpfsMetadata } from 'components/NftGalleryPage/interfaces';

export interface INft {
  data: IIpfsMetadata;
}

export interface INftStore {
  storedNft: { [key: string]: IGalleryNft };
  fetchNft: (key: string) => void;
}

export interface IIpfsStore {
  storedIpfs: { [key: string]: IIpfsMetadata };
  fetchIpfs: (key: string) => void;
}
