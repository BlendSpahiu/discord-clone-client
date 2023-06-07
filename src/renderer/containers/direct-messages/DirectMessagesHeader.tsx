import { ReactElement } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { DirectMessagesHeaderProps } from './DirectMessages.props';

export const DirectMessagesHeader = ({
  ...rest
}: DirectMessagesHeaderProps): ReactElement => {
  return (
    <motion.div className={classNames('direct-messages-header')} {...rest}>
      <motion.div className={classNames('direct-messages-conversations')}>
        <div className="direct-messages-conversations-input">
          <input type="text" value="Find or start a conversation" />
        </div>
      </motion.div>
      <div>test</div>
    </motion.div>
  );
};
