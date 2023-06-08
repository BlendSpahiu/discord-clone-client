import { ReactElement, useState } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Avatar, If } from '../../components';
import { TabsEnums } from '../../enums/tabs/Tabs.enums';
import { DMHeaderInfo } from '../direct-messages/DMHeaderInfo';
import { HeaderProps } from './Header.props';

export const Header = ({
  setShowUserProfile,
  showUserProfile,
  activeTab,
  ...rest
}: HeaderProps): ReactElement => {
  const [tab, setTab] = useState<TabsEnums>(TabsEnums.DIRECT_MESSAGES);

  return (
    <motion.div className={classNames('direct-messages-header')} {...rest}>
      <If condition={activeTab === TabsEnums.DIRECT_MESSAGES}>
        <motion.div className={classNames('direct-messages-conversations')}>
          <div className="direct-messages-conversations-input">
            <input type="text" placeholder="Find or start a conversation" />
          </div>
          <div style={{ background: '#313338' }}>
            <Avatar
              size="md"
              serverName="Weiszenberg"
              interactable={false}
              username={'Weisz'}
              nickname="WeiszenBerg"
            />
          </div>
        </motion.div>
        <DMHeaderInfo
          showUserProfile={showUserProfile}
          setShowUserProfile={setShowUserProfile}
        />
      </If>
    </motion.div>
  );
};
