import { ReactElement, useState } from 'react';
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
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const getServerAbbreviation = () => {
    let abbr = '';

    serverName?.split(' ').forEach((name) => {
      abbr = abbr + name[0];
    });

    return abbr;
  };

  console.log(isHovering);

  return (
    <div className="sidebar-avatar-container">
      <AnimatePresence>
        <motion.div
          layout
          transition={{ ease: 'easeInOut', duration: 0.2 }}
          exit={{ height: 0, width: 0 }}
          className={classNames(
            selected ? 'direct-messages-selected' : '',
            isHovering ? 'avatar-hovering' : ''
          )}
        />
        <motion.div
          layout
          whileHover={{
            ...(!selected && {
              // border: '1px solid transparent',
              borderRadius: '30%',
              backgroundColor: '#5865f2',
            }),
          }}
          exit={{ borderRadius: '50%' }}
          transition={{ ease: 'easeInOut', duration: 0.1 }}
          className={classNames(
            'avatar',
            selected ? 'avatar-selected' : '',
            className
          )}
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
          {...rest}
        >
          {serverName && (
            <Typography as="p">{getServerAbbreviation()}</Typography>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
