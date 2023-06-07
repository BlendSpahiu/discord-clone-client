import { ReactElement, useState } from 'react';
import { DirectMessages } from '../../containers/direct-messages/DirectMessages';
import { If } from '../../components';
import { Button } from '../../components/common/Button/Button';
import { Sidebar } from '../../containers';
import { useAuth } from '../../hooks/useAuth/useAuth';

export const Main = (): ReactElement => {
  const [activeConversation, setActiveConversation] = useState<number>(0);
  const { logout } = useAuth();

  return (
    <div className="main">
      <Sidebar
        activeConversation={activeConversation}
        setActiveConversation={setActiveConversation}
      />
      <If condition={activeConversation === 0}>
        <DirectMessages />
      </If>
    </div>
  );
};
