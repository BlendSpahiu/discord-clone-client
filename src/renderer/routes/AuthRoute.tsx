import { ReactElement, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

export const AuthRoute = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const isLoggedIn = !!localStorage.getItem('access_token');

  return isLoggedIn ? <>{children}</> : <Navigate to="/auth/login" />;
};
