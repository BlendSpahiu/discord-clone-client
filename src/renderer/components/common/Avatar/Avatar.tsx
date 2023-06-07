import { ReactElement } from 'react';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { Typography } from '../Typography/Typography';
import { AvatarProps } from './Avatar.props';

export const Avatar = ({
  serverName,
  className,
  selected,
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
          ...(!selected && {
            boxShadow: '4px 0px 0px gray inset',
          }),
        }}
        transition={{ ease: 'easeInOut', duration: 0.1 }}
        className={classNames(selected ? 'avatar-container-selected' : '')}
        {...rest}
      >
        {serverName && (
          <motion.div
            whileHover={{
              ...(!selected && {
                borderRadius: '30%',
                backgroundColor: '#5865f2',
              }),
            }}
            whileTap={{
              y: 4,
            }}
            transition={{ ease: 'easeInOut', duration: 0.1 }}
            className={classNames(
              'avatar',
              selected ? 'avatar-selected' : '',
              className
            )}
          >
            <Typography as="p">{getServerAbbreviation()}</Typography>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
