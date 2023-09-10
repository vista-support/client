import { FC } from 'react';
import { RegFormProps } from './regForm.types';
import style from './index.module.scss';
import { Form } from '@features/form/form';
import { Button, Input } from '@shared/index';
import { Link, useNavigate } from 'react-router-dom';
import { Select } from '@features/index';

export const RegForm: FC<RegFormProps> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <Form>
      <h2 className={style.title}>Регистрация</h2>
      <Input placeholder="Почта" type="email" required extend={style.input} />
      <Input placeholder="Пароль" type="password" required />
      <Input placeholder="Имя пользователя" type="text" required />
      <Select options={['Выберите организацию', 'Сыроежкин', 'Чижиков']} />
      <Select options={['Выберите роль', 'Сисадмин', 'Доктор']} />
      <Button extend={style.button} onClick={() => navigate('tracker')}>
        Зарегистрироваться
      </Button>
      <Link className={style.link} to="/">
        Войти
      </Link>
    </Form>
  );
};
