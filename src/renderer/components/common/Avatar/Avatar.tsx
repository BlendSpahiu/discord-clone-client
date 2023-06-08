import { ReactElement } from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { Badge } from '../Badge/Badge';
import { If } from '../Conditions/If';
import { Typography } from '../Typography/Typography';
import { AvatarProps } from './Avatar.props';

export const Avatar = ({
  serverName,
  className,
  selected,
  interactable = true,
  size,
  nickname,
  username,
  isProfile,
  userStatus,
  avatarStyles,
  ...rest
}: AvatarProps): ReactElement => {
  const getServerAbbreviation = () => {
    let abbr = '';

    serverName?.split(' ').forEach((name) => {
      abbr = abbr + name[0];
    });

    return abbr;
  };

  return (
    <AnimatePresence>
      <motion.div
        layout
        whileHover={{
          ...(!selected &&
            interactable && {
              boxShadow: '4px 0px 0px gray inset',
            }),
        }}
        transition={{ ease: 'easeInOut', duration: 0.1 }}
        className={classNames(
          selected ? 'avatar-container-selected' : '',
          !interactable ? 'avatar-non-interactable-container' : ''
        )}
        {...rest}
      >
        {serverName && (
          <motion.div
            whileHover={{
              ...(!selected &&
                interactable && {
                  borderRadius: '30%',
                  backgroundColor: '#5865f2',
                }),
            }}
            whileTap={{
              ...(interactable && {
                y: 4,
              }),
            }}
            transition={{ ease: 'easeInOut', duration: 0.1 }}
            className={classNames(
              'avatar',
              selected && interactable ? 'avatar-selected' : '',
              !interactable ? 'avatar-non-interactable' : '',
              size ? `avatar-${size}` : '',
              className
            )}
            style={avatarStyles}
          >
            <Typography as="p" size={!interactable ? 'xs' : 'base'}>
              {getServerAbbreviation()}
            </Typography>
            <If condition={isProfile ?? false}>
              <motion.div
                className={classNames(
                  'avatar-user-status',
                  userStatus ? `avatar-user-status-${userStatus}` : ''
                )}
              >
                <motion.div
                  style={{
                    width: 12,
                    height: 12,
                    top: 0,
                    left: 0,
                    borderRadius: '50%',
                    position: 'absolute',
                    background: '#232428',
                  }}
                />
              </motion.div>
            </If>
          </motion.div>
        )}
        <If condition={!interactable}>
          <Typography as="p" size="sm">
            {username}
          </Typography>
        </If>
        <If condition={!!nickname}>
          <Badge variant="default" />
          <Typography as="p" size="sm">
            {nickname}
          </Typography>
        </If>
      </motion.div>
    </AnimatePresence>
  );
};
