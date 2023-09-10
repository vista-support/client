import { FC } from 'react';
import { SelectProps } from './select.types';
import style from './index.module.scss';

export const Select: FC<SelectProps> = ({ options }) => {
  return (
    <select className={style.select}>
      {options.map(option => {
        return <option className={style.option}>{option}</option>;
      })}
    </select>
  );
};
