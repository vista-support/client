import { FC } from 'react';
import cn from 'classnames';

import { InputProps } from './input.types';

import style from './index.module.scss';

export const Input: FC<InputProps> = ({ placeholder, type, required, extend }) => {
  return (
    <input
      className={cn(style.default, extend)}
      placeholder={placeholder}
      type={type}
      required={required}
    />
  );
};
