import { HTMLMotionProps } from 'framer-motion';
import { GeneralProps } from '../../../interfaces/interfaces/General.props';

type BadgeVariant = 'success' | 'error' | 'info' | 'default';

export interface BadgeProps extends GeneralProps, HTMLMotionProps<'div'> {
  variant?: BadgeVariant;
}
