import { FC } from 'react';
import { AuthFormProps } from './authForm.types';
import style from './index.module.scss';
import { Form } from '@features/form/form';
import { Button, Input } from '@shared/index';
import { Link } from 'react-router-dom';

export const AuthForm: FC<AuthFormProps> = ({ children }) => {
  return (
    <Form>
      <h2 className={style.title}>Войти в систему</h2>
      <Input placeholder="email" type="email" required extend={style.input} />
      <Input placeholder="email" type="email" required />
      <Button extend={style.button}>Войти</Button>
      <Link className={style.link} to="registration">
        Зарегистрироваться
      </Link>
    </Form>
  );
};
