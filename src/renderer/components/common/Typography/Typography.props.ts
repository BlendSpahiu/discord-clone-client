import { DetailedHTMLProps, ElementType, HTMLAttributes } from 'react';
import { MergeElementProps } from '../../../interfaces/types/MergeElementProps';

type TextColor = 'white' | 'black' | 'red';
type Size = 'base' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface TypographyBaseProps<T>
  extends DetailedHTMLProps<HTMLAttributes<T>, T> {
  className?: string;
  color?: TextColor;
  helpText?: boolean;
  size?: Size;
}

export type TypographyProps<P extends ElementType = 'p'> = {
  as?: P;
} & MergeElementProps<P, TypographyBaseProps<P>>;
