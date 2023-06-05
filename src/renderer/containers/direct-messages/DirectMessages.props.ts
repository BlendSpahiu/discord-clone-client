import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { GeneralProps } from '../../interfaces/interfaces/General.props';

export interface DirectMessagesProps
  extends GeneralProps,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
