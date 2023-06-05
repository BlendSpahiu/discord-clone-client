import { ReactElement } from 'react';
import { Avatar } from '../../components/common/Avatar/Avatar';
import { SidebarProps } from './Sidebar.props';
import { DirectMessagesAvatar } from '../direct-messages/DirectMessagesAvatar';

export const Sidebar = ({ children, ...rest }: SidebarProps): ReactElement => {
  const MOCK_SERVERS = [
    { id: 1, name: 'test1 test' },
    { id: 2, name: 'test2' },
    { id: 3, name: 'test3' },
    { id: 4, name: 'test4' },
    { id: 5, name: 'test5' },
    { id: 6, name: 'test6' },
  ];

  return (
    <div className="sidebar" {...rest}>
      <DirectMessagesAvatar />
      <div className="direct-messages-divider" />
      {MOCK_SERVERS.map((server) => (
        <Avatar serverName={server.name} />
      ))}
    </div>
  );
};
