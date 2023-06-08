import { HTMLMotionProps } from 'framer-motion';
import { GeneralProps } from '../../interfaces/interfaces/General.props';

export interface UserProfileProps extends GeneralProps, HTMLMotionProps<'div'> {
  showUserProfile: boolean;
}
