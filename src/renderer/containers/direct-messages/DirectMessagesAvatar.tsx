import { ReactElement } from 'react';
import { Avatar } from '../../components/common/Avatar/Avatar';

export const DirectMessagesAvatar = (): ReactElement => {
  return <Avatar style={{ marginBottom: 12 }} serverName="Direct Messages" />;
};
