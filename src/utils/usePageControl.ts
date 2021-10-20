import create from 'zustand';
import { IPageControl } from '../components/Pagination/interfaces';

export const usePageControl = create<IPageControl>((set) => {
  return {
    currentPage: 1,
    increase: () => set((state) => ({ currentPage: state.currentPage + 1 })),
    decrease: () => set((state) => ({ currentPage: state.currentPage - 1 })),
    setPage: (to) => set(() => ({ currentPage: to })),
  };
});
