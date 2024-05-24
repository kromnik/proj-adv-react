import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routerConfig } from 'shared/config/routeConfig/routerConfig';

export const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {routerConfig.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={(
            <div className="page-wrapper">
              {element}
            </div>
          )}
        />
      ))}
    </Routes>
  </Suspense>
);
