import { Dispatch, SetStateAction } from 'react';
import { HTMLMotionProps } from 'framer-motion';
import { GeneralProps } from '../../interfaces/interfaces/General.props';

export interface HeaderProps extends GeneralProps, HTMLMotionProps<'div'> {
  activeTab: number;
  showUserProfile: boolean;
  setShowUserProfile: Dispatch<SetStateAction<boolean>>;
}
