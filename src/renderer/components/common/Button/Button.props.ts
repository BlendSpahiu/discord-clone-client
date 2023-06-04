import { GeneralProps } from '../../../interfaces/interfaces/General.props';
import { HTMLMotionProps } from 'framer-motion';

type Variant = 'primary' | 'secondary' | 'text' | 'none';
type ButtonTypes = 'submit' | 'button' | 'reset';
type Color = 'primary' | 'secondary';

export interface ButtonProps extends GeneralProps, HTMLMotionProps<'button'> {
  type?: ButtonTypes;
  color?: Color;
  variant?: Variant;
}
