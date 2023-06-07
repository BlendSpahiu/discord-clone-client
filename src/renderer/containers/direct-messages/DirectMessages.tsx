import { ReactElement } from 'react';
import { DirectMessagesConversation } from './DirectMessagesConversations/DirectMessagesConversations';
import { DirectMessagesProps } from './DirectMessages.props';
import { DirectMessagesHeader } from './DirectMessagesHeader';

export const DirectMessages = ({
  ...rest
}: DirectMessagesProps): ReactElement => {
  return (
    <>
      <DirectMessagesHeader />
      <DirectMessagesConversation />
    </>
  );
};
