import { ReactElement, useState } from 'react';
import { Avatar } from '../../components/common/Avatar/Avatar';
import { SidebarProps } from './Sidebar.props';
import { DirectMessagesAvatar } from '../direct-messages/DirectMessagesAvatar';
import classNames from 'classnames';
import { AnimatePresence } from 'framer-motion';

export const Sidebar = ({ children, ...rest }: SidebarProps): ReactElement => {
  const [selected, setSelected] = useState<number>(0);

  const handleSetSelected = (value: number) => () => setSelected(value);

  const MOCK_SERVERS = [
    { id: 1, name: 'test1 test' },
    { id: 2, name: 'test2' },
    { id: 3, name: 'test3' },
    { id: 4, name: 'test4' },
    { id: 5, name: 'test5' },
    { id: 6, name: 'test6' },
  ];

  console.log(selected);

  return (
    <div className={classNames('sidebar')} {...rest}>
      <Avatar
        onClick={handleSetSelected(0)}
        selected={selected === 0}
        className={classNames('direct-messages-avatar')}
        serverName={'Direct Messages'}
      />
      <div className="direct-messages-divider" />
      {MOCK_SERVERS.map((server) => (
        <Avatar
          key={server.id}
          onClick={handleSetSelected(server.id)}
          selected={selected === server.id}
          serverName={server.name}
        />
      ))}
    </div>
  );
};
