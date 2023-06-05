import { ReactElement } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { Typography } from '../Typography/Typography';
import { AvatarProps } from './Avatar.props';

export const Avatar = ({
  serverName,
  className,
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
    <motion.div
      layout
      whileHover={{
        // border: '1px solid transparent',
        borderRadius: '30%',
        backgroundColor: '#5865f2',
      }}
      exit={{ borderRadius: '50%' }}
      transition={{ ease: 'easeInOut', duration: 0.1 }}
      className={classNames('avatar', className)}
      {...rest}
    >
      {serverName && <Typography as="p">{getServerAbbreviation()}</Typography>}
    </motion.div>
  );
};
