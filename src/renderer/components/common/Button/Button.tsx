import { ReactElement } from 'react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { ButtonProps } from './Button.props';
import { Loader } from '../Loader/Loader';

export const Button = ({
  type = 'button',
  children,
  className,
  variant,
  color,
  loading,
  fullWidth = true,
  ...rest
}: ButtonProps): ReactElement => {
  return (
    <motion.button
      transition={{ duration: 0.1 }}
      whileTap={{ scale: 0.97, backgroundColor: '#3c47c5' }}
      className={classNames(
        'button',
        fullWidth ? 'full-width' : '',
        variant ? `button-${variant}` : '',
        color ? `button-text-${color}` : '',
        className
      )}
      type={type}
      {...rest}
    >
      {loading ? <Loader /> : children}
    </motion.button>
  );
};
