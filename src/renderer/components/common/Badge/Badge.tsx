import { ReactElement } from 'react';
import { BadgeProps } from './Badge.props';
import { motion } from 'framer-motion';
import classNames from 'classnames';

export const Badge = ({
  variant = 'default',
  children,
  ...rest
}: BadgeProps): ReactElement => {
  return (
    <motion.div
      className={classNames('badge', variant ? `badge-${variant}` : '')}
      {...rest}
    >
      {children || 'AKA'}
    </motion.div>
  );
};
