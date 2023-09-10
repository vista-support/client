import { FC } from 'react';
import { FormProps } from './form.types';
import style from './index.module.scss';

export const Form: FC<FormProps> = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};
