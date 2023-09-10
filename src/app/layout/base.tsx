import { FC } from 'react';
import { BaseProps } from './base.types';

import style from './index.module.scss';
import { Outlet } from 'react-router-dom';

export const Base: FC<BaseProps> = () => {
  return (
    <div className={style.container}>
      <Outlet />
    </div>
  );
};
