import { FC } from 'react';

import { AuthorizationProps } from './authorization.types';
import { AuthForm } from '@widgets/index';

export const Authorization: FC<AuthorizationProps> = ({ children }) => {
  return <AuthForm />;
};
