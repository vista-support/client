import React from 'react';

export type ButtonProps = {
  onClick?: (event: MouseEvent) => void
  children?: React.ReactNode;
  extend?: string;
};
