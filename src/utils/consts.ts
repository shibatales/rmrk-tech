import { get, set } from 'idb-keyval';
import { StateStorage } from 'zustand/middleware';

export const Gateway = 'https://rmrk.mypinata.cloud/ipfs/';
export const RmrkApi =
  'https://singular.rmrk.app/api/rmrk1/account/CdA62JpyfEyEASA5XKYJAyYZmdQPqe5X9x8MLnoTWtc9rNn';
export const storage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    // console.log(name, 'has been retrieved');
    return (await get(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    // console.log(name, 'with value', value, 'has been saved');
    set(name, value);
  },
};
