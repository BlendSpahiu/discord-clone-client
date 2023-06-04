import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { GeneralProps } from '../../interfaces/interfaces/General.props';

export interface SidebarProps
  extends GeneralProps,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
