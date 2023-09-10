import { FC } from 'react';

import { TrackerProps } from './tracker.types';

import { TaskList } from '@widgets/index';

export const Tracker: FC<TrackerProps> = ({ children }) => {
  return <TaskList />;
};
