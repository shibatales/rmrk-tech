export interface IGalleryNft {
  id: string;
  block: number;
  forsale: number;
  collectionId: string;
  instance: string;
  metadata: IIpfsMetadata;
  name: string;
  owner: string;
  sn: number;
  transferable: number;
}

export interface IIpfsMetadata {
  description: string;
  name: string;
  attributes: unknown[];
  image: string;
}
