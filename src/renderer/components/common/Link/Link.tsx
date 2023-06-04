import { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { LinkProps } from './Link.props';
import classNames from 'classnames';

export const Link = ({
  to,
  children,
  className,
  ...rest
}: LinkProps): ReactElement => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) => {
        if (isActive) {
          return 'link';
        } else if (isPending) {
          return 'link';
        } else if (className) {
          return classNames('link', className);
        }
        return 'link';
      }}
      {...rest}
    >
      {children}
    </NavLink>
  );
};
