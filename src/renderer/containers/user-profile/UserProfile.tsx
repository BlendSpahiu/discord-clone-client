import { ReactElement } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import classNames from 'classnames';
import { Avatar, Container, If, Typography } from '../../components';
import { UserProfileProps } from './UserProfile.props';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

export const UserProfile = ({
  showUserProfile,
}: UserProfileProps): ReactElement => {
  return (
    <motion.div
      key="profile"
      layout
      initial="hidden"
      whileInView="visible"
      exit="exit"
      variants={{
        exit: { width: 0 },
        visible: { width: 460 },
        hidden: { width: 0 },
      }}
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
      className={classNames('user-profile')}
    >
      <div className="user-profile-banner" />
      <div className="user-profile-info">
        <Avatar
          style={{
            position: 'relative',
            bottom: 62,
          }}
          avatarStyles={{ border: '4px solid #232428' }}
          interactable={false}
          size="HUMONGOUS"
          serverName="Weisz"
          isProfile
          userStatus="away"
        />
        <div className="user-info">
          <Container className="user-info-container">
            <Typography as="h4">Weisz</Typography>
            <Typography as="p" size="sm">
              Weisz#1851
            </Typography>
          </Container>
          <Container className="user-info-container">
            <Typography as="p" size="sm" style={{ fontWeight: 600 }}>
              Discord Member Since
            </Typography>

            <Typography as="p" size="sm">
              May 17, 2016
            </Typography>
          </Container>
          <Container className="user-info-container">
            <Typography as="p" size="sm" style={{ fontWeight: 600 }}>
              Note
            </Typography>
            <input placeholder="Click to add a note" />
          </Container>
        </div>
        <div className="mutual-friends">
          <Container
            flex
            alignItems="center"
            justifyContent="space-between"
            className="user-info-container"
          >
            <Typography as="p" size="sm">
              Test
            </Typography>
            <ChevronRightIcon width={16} height={16} color="#949ba4" />
          </Container>
          <Container
            flex
            alignItems="center"
            justifyContent="space-between"
            className="user-info-container"
          >
            <Typography as="p" size="sm">
              Test
            </Typography>
            <ChevronRightIcon width={16} height={16} color="#949ba4" />
          </Container>
        </div>
      </div>
    </motion.div>
  );
};
