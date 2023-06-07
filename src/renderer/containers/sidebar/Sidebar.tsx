import { ReactElement } from 'react';
import classNames from 'classnames';
import { Container } from '../../components';
import { Avatar } from '../../components/common/Avatar/Avatar';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({
  setActiveConversation,
  activeConversation,
  ...rest
}: SidebarProps): ReactElement => {
  const handleSetSelected = (value: number) => () =>
    setActiveConversation(value);

  const MOCK_SERVERS = [
    { id: 1, name: 'test1 test' },
    { id: 2, name: 'test2' },
    { id: 3, name: 'test3' },
    { id: 4, name: 'test4' },
    { id: 5, name: 'test5' },
    { id: 6, name: 'test6' },
  ];

  console.log(activeConversation);

  return (
    <div className={classNames('sidebar')} {...rest}>
      <Avatar
        onClick={handleSetSelected(0)}
        selected={activeConversation === 0}
        className={classNames('direct-messages-avatar')}
        serverName={'Direct Messages'}
      />
      <div className="direct-messages-divider" />
      <Container spacing="none" className="servers">
        {MOCK_SERVERS.map((server) => (
          <Avatar
            key={server.id}
            onClick={handleSetSelected(server.id)}
            selected={activeConversation === server.id}
            serverName={server.name}
          />
        ))}
      </Container>
    </div>
  );
};
