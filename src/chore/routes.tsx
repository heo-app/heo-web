import { Routes, Route } from 'react-router-dom';

import { AppLayout } from '../components/appLayout';
import { LoginPage } from '../components/login';
import { DashboardPage } from '../components/dashboard';
import { Profile } from 'src/components/profile';

export const customRoutes = (
  <Routes>
    <Route
      path="/"
      element={
        <AppLayout>
          <DashboardPage />
        </AppLayout>
      }
    />

    <Route
      path="/profile"
      element={
        <AppLayout>
          <Profile />
        </AppLayout>
      }
    />

    <Route path="/login" element={<LoginPage />} />
  </Routes>
);
