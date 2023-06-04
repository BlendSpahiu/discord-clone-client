import { HTMLMotionProps } from 'framer-motion';
import { GeneralProps } from '../../../interfaces/interfaces/General.props';
import { ToastrEnums } from '../../../enums/toaster/Toaster.enums';

export interface ToastrProps extends GeneralProps, HTMLMotionProps<'div'> {
  toastId: number;
  type: ToastrEnums;
  title: string;
  timeout?: number;
  description?: string;
  removeToast: (toastId: number) => void;
}
