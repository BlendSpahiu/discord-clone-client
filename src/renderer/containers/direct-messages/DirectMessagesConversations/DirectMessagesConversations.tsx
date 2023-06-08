import { ReactElement } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';

export const DirectMessagesConversation = (): ReactElement => {
  return (
    <motion.div className={classNames('direct-messages-conversations')}>
      test
    </motion.div>
  );
};
