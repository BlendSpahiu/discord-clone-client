import { ReactElement } from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { Typography } from '../Typography/Typography';
import { AvatarProps } from './Avatar.props';
import { If } from '../Conditions/If';
import { Badge } from '../Badge/Badge';

export const Avatar = ({
  serverName,
  className,
  selected,
  interactable = true,
  size,
  nickname,
  username,
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
          >
            <Typography as="p" size={!interactable ? 'xs' : 'base'}>
              {getServerAbbreviation()}
            </Typography>
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
