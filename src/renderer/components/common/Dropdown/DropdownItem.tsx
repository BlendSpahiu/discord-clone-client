import { ReactElement } from 'react';
import { DropdownItemProps } from './Dropdown.props';
import classNames from 'classnames';
import { motion } from 'framer-motion';

export const DropdownItem = ({
  children,
  onItemClick,
  ...rest
}: DropdownItemProps): ReactElement => {
  return (
    <div className={classNames('dropdown-item')} {...rest}>
      <motion.button
        onClick={onItemClick}
        className="button-text button-text-secondary full-width"
        variants={{
          closed: { x: -16, opacity: 0 },
          open: { x: 0, opacity: 1 },
        }}
        transition={{ opacity: { duration: 0.1 } }}
      >
        {children}
      </motion.button>
    </div>
  );
};
