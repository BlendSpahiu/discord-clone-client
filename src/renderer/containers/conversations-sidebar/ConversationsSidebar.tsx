import { ReactElement } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames';
import { Avatar, Container, Typography } from '../../components';
import {
  CakeIcon,
  InformationCircleIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import { MOCK_DMS } from './ConversationsSidebar.props';

export const ConversationsSidebar = (): ReactElement => {
  return (
    <motion.div className={classNames('conversations-sidebar')}>
      <Container flex flexDirection="col" spacing="none">
        <Container
          flex
          alignItems="center"
          spaceDirection="x"
          spaceBetween="md"
        >
          <UsersIcon width={24} height={24} color="gray" />
          <Typography as="p" style={{ color: 'gray' }}>
            Friends
          </Typography>
        </Container>
        <Container
          flex
          alignItems="center"
          spaceDirection="x"
          spaceBetween="md"
        >
          <InformationCircleIcon width={24} height={24} color="gray" />
          <Typography as="p" style={{ color: 'gray' }}>
            Nitro
          </Typography>
        </Container>
        <Container
          flex
          alignItems="center"
          spaceDirection="x"
          spaceBetween="md"
        >
          <CakeIcon width={24} height={24} color="yellow" />
          <Typography as="p" style={{ color: 'gray' }}>
            Discord's Birthday
          </Typography>
        </Container>
      </Container>
      <Container spacing="none" style={{ height: 'unset' }}>
        {MOCK_DMS.map((mock) => (
          <Container
            key={mock.username}
            spacing="none"
            flex
            alignItems="center"
            style={{ height: 'unset' }}
          >
            <Avatar size="xs" serverName={mock.username} />
            <Typography>{mock.username}</Typography>
          </Container>
        ))}
      </Container>
    </motion.div>
  );
};
