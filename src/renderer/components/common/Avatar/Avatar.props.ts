import { HTMLMotionProps } from 'framer-motion';
import { GeneralProps } from '../../../interfaces/interfaces/General.props';

type Size = 'sm' | 'xs' | 'md' | 'lg';

export interface AvatarProps extends GeneralProps, HTMLMotionProps<'div'> {
  size?: Size;
  selected?: boolean;
  serverName?: string;
  interactable?: boolean;
  username?: string;
  nickname?: string;
}
