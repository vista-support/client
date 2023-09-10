import { Authorization } from '@pages/index';
import { PAGES, Routes } from './routes.types'
import { Registration } from '@pages/registration/registration';
import { Navigate } from 'react-router-dom';

export const AUTH_ROUTES: Routes = [
  {
    path: PAGES.TRACKER,
    component: () => <Authorization />,
  },
  {
    path: PAGES.ALL,
    component: () => <Navigate to="/tracker" replace />,
  },
];

export const UNAUTH_ROUTES: Routes = [
  {
    path: PAGES.AUTH,
    component: () => <Authorization />,
  },
  {
    path: PAGES.REG,
    component: () => <Registration />,
  },
  {
    path: PAGES.ALL,
    component: () => <Navigate to="/" replace />,
  },
];
