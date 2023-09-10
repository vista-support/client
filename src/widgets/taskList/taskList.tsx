import { FC, useState } from 'react';
import { TaskListProps } from './taskList.types';
import down from '@assets/arrow-down.svg';
import up from '@assets/arrow-up.svg';

import style from './index.module.scss';

export const TaskList: FC<TaskListProps> = ({ children }) => {
  const handleOpenDescription = (id: number) => {
    const description = document.getElementById(`${id}`);
    if (description) {
      description.classList.toggle('active');
    }
  };

  return (
    <div className={style.container}>
      {[1, 2, 3, 4, 5].map((item, index) => {
        return (
          <div className={style.task} key={index}>
            <div className={style.header}>
              <p className={style.id}>IMP-1916</p>
              <p className={style.title}>
                Тестирование ускоренного Расписания.
              </p>
              <button
                className={style.button}
                onClick={() => handleOpenDescription(index)}>
                <img src={down} />
              </button>
            </div>
            <p className={style.description} id={`${index}`}>
              Тестирование ускоренного Расписания перед обновлениями. Создан
              регрессионный чек-лист в виде шаблона в Битриксе.
            </p>
          </div>
        );
      })}
    </div>
  );
};
