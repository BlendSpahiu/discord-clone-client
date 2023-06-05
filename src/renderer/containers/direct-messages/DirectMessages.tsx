import { ReactElement } from 'react';
import { DirectMessagesProps } from './DirectMessages.props';

export const DirectMessages = ({
  children,
  ...rest
}: DirectMessagesProps): ReactElement => {
  return <div>DM's</div>;
};
