import { ReactElement, useState } from 'react';
import { DirectMessages } from '../../containers/direct-messages/DirectMessages';
import { If } from '../../components';
import { Button } from '../../components/common/Button/Button';
import { ConversationsSidebar, Sidebar, UserProfile } from '../../containers';
import { useAuth } from '../../hooks/useAuth/useAuth';
import { Header } from '../../containers/header/Header';
import { AnimatePresence } from 'framer-motion';

export const Main = (): ReactElement => {
  const [activeConversation, setActiveConversation] = useState<number>(0);
  const [showUserProfile, setShowUserProfile] = useState<boolean>(true);

  const { logout } = useAuth();

  return (
    <div className="main">
      <Sidebar
        activeConversation={activeConversation}
        setActiveConversation={setActiveConversation}
      />
      <div style={{ width: '100%' }}>
        <Header
          activeTab={activeConversation}
          setShowUserProfile={setShowUserProfile}
          showUserProfile={showUserProfile}
        />
        <div className="main-content">
          <If condition={activeConversation === 0}>
            <ConversationsSidebar />
            <DirectMessages />
            <AnimatePresence>
              {showUserProfile && (
                <UserProfile showUserProfile={showUserProfile} />
              )}
            </AnimatePresence>
          </If>
        </div>
      </div>
    </div>
  );
};
