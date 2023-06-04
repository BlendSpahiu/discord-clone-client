import { createHashRouter, Navigate } from 'react-router-dom';
import { AuthProvider } from '../context/auth/AuthContext';
import { Login } from '../views/auth/Login';
import { Register } from '../views/auth/Register';
import { Main } from '../views/main/Main';
import { AuthRoute } from './AuthRoute';

export const router = createHashRouter([
  { path: '/', element: <Navigate to="/auth/register" /> },
  {
    path: '/auth/register',
    element: <Register />,
  },
  {
    path: '/auth/login',
    element: <Login />,
  },
  {
    path: '/main',
    element: (
      <AuthProvider>
        <AuthRoute>
          <Main />
        </AuthRoute>
      </AuthProvider>
    ),
  },
]);
