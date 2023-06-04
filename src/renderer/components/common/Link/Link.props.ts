import { HTMLMotionProps } from 'framer-motion';
import { GeneralProps } from '../../../interfaces/interfaces/General.props';
import { ReactNode } from 'react';
import { NavLinkProps } from 'react-router-dom';

export interface LinkProps extends GeneralProps, NavLinkProps {
  to: string;
  children?: ReactNode;
  className?: string;
}
