import { HStack, Text } from '@chakra-ui/layout';
import React from 'react';
import { IPage } from './interfaces';
import { PageButton } from './PageButton';
import { usePageControl } from '../../utils/usePageControl';

const PageControl: React.FC<IPage> = ({ totalPages }) => {
  const currentPage = usePageControl(React.useCallback((state) => state.currentPage, []));
  const next = usePageControl(React.useCallback((state) => state.increase, []));
  const prev = usePageControl(React.useCallback((state) => state.decrease, []));
  const set = usePageControl(React.useCallback((state) => state.setPage, []));
  const totalPageCount = totalPages ? ` out of ${totalPages}` : null;
  const disablePrev = currentPage - 1 === 0 || totalPages === 0;
  const disableNext = currentPage + 1 > totalPages || totalPages === 0;
  return (
    <HStack spacing="2" justifyContent="center" my="5">
      <PageButton text="First" click={() => set(1)} disabled={disablePrev} />
      <PageButton text="Prev" click={prev} disabled={disablePrev} />
      <Text>
        {currentPage}
        {totalPageCount}
      </Text>
      <PageButton text="Next" click={next} disabled={disableNext} />
      <PageButton text="Last" click={() => set(totalPages)} disabled={disableNext} />
    </HStack>
  );
};
export default PageControl;
