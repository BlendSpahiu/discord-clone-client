import { ReactElement } from 'react';
import { Sidebar } from '../../containers';
import { Button } from '../../components/common/Button/Button';
import { useAuth } from '../../hooks/useAuth/useAuth';

export const Main = (): ReactElement => {
  const { logout } = useAuth();

  return (
    <div className="main">
      <Sidebar />
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};
