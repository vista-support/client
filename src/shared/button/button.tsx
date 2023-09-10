import { FC } from 'react';
import cn from 'classnames';

import { ButtonProps } from './button.types';

import style from './index.module.scss';

export const Button: FC<ButtonProps> = ({ children, extend }) => {
  return <button className={cn(style.primary, extend)}>{children}</button>;
};
