import { ReactNode } from 'react';
import { RouteObject } from 'react-router-dom';

export type Route = RouteObject & {
  path: string;
  exact?: boolean;
  component: () => ReactNode;
};

export type Routes = Route[];

export const enum PAGES {
  ALL = '*',
  AUTH = '/',
  TRACKER = 'tracker',
  REG = 'registration',
}
