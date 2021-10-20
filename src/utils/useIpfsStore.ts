import { IIpfsStore } from 'components/Nft/interfaces';
import { IIpfsMetadata } from 'components/NftGalleryPage/interfaces';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { storage } from './consts';
import { fetcher } from './fetcher';

export const useIpfsStore = create<IIpfsStore>(
  persist(
    (set, get) => ({
      storedIpfs: {},
      fetchIpfs: async (key: string) => {
        const dicStore = get().storedIpfs;
        if (dicStore.hasOwnProperty(key)) {
          return;
        } else {
          const result: IIpfsMetadata = await fetcher(key);
          if (dicStore[key] !== result) {
            set((state) => ({ storedIpfs: { ...state.storedIpfs, ...{ [key]: result } } }));
          }
        }
      },
    }),
    {
      name: 'ipfs-storage',
      getStorage: () => storage,
    },
  ),
);
