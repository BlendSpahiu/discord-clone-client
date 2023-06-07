import { ReactElement, useEffect, useState } from 'react';
import { DirectMessagesConversation } from './DirectMessagesConversations/DirectMessagesConversations';
import { DirectMessagesProps } from './DirectMessages.props';
import { DirectMessagesHeader } from './DirectMessagesHeader';
import { AnimatePresence, motion } from 'framer-motion';

export const DirectMessages = ({
  ...rest
}: DirectMessagesProps): ReactElement => {
  return (
    <AnimatePresence>
      <motion.div
        layout
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
        style={{ width: '100%' }}
      >
        <DirectMessagesHeader />
        <DirectMessagesConversation />
      </motion.div>
    </AnimatePresence>
  );
};
