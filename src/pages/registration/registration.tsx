import { FC } from 'react';

import { RegistrationProps } from './registration.types';
import { RegForm } from '@widgets/index';

export const Registration: FC<RegistrationProps> = ({ children }) => {
  return <RegForm />;
};
