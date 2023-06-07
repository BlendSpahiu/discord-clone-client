import { ReactElement } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { DirectMessagesHeaderProps } from './DirectMessages.props';
import { Avatar } from '../../components';
import {
  PhoneArrowUpRightIcon,
  TagIcon,
  UserCircleIcon,
  UserPlusIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/solid';

export const DirectMessagesHeader = ({
  ...rest
}: DirectMessagesHeaderProps): ReactElement => {
  return (
    <motion.div className={classNames('direct-messages-header')} {...rest}>
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
      <div className="dm-header-icons">
        <PhoneArrowUpRightIcon width={20} height={20} color="#949ba4" />
        <VideoCameraIcon width={20} height={20} color="#949ba4" />
        <TagIcon width={20} height={20} color="#949ba4" />
        <UserPlusIcon width={20} height={20} color="#949ba4" />
        <UserCircleIcon width={20} height={20} color="#949ba4" />
      </div>
    </motion.div>
  );
};
