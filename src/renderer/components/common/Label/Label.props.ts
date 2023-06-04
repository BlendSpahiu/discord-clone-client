import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface LabelProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  label?: string;
  htmlFor?: string;
}
