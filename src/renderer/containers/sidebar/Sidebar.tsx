import { ReactElement } from 'react';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({ children, ...rest }: SidebarProps): ReactElement => {
  return (
    <div className="sidebar" {...rest}>
      TEST
    </div>
  );
};
