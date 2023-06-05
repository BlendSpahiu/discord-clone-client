import { HTMLMotionProps } from 'framer-motion';
import { GeneralProps } from '../../../interfaces/interfaces/General.props';

export interface AvatarProps extends GeneralProps, HTMLMotionProps<'div'> {
  serverName?: string;
}
