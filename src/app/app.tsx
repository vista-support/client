import { Navigate, Route, Routes } from 'react-router-dom';

import './styles/global.scss';
import './styles/vars.scss';
import { Base } from './layout/base';
import { Authorization, Tracker, Registration } from '@pages/index';

export function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/*" element={<Base />}>
        <Route index element={<Authorization />} />
        <Route path={'registration'} element={<Registration />} />
        <Route path={'tracker'} element={<Tracker />} />
      </Route>
    </Routes>
  );
}
