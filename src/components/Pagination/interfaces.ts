export interface IPage {
  index?: number;
  totalPages?: number;
  setPage?: (by: number) => void;
}

export interface IPageButton {
  text: string;
  click: () => void;
  disabled: boolean;
}

export interface IPageControl {
  currentPage: number;
  increase: () => void;
  decrease: () => void;
  setPage: (to: number) => void;
}
