import { Button } from '@chakra-ui/react';
import React from 'react';
import { IPageButton } from './interfaces';

export const PageButton: React.FC<IPageButton> = ({ click, text, disabled }) => (
  <Button disabled={disabled} onClick={click}>
    {text}
  </Button>
);
