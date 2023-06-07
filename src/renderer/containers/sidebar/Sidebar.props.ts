import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from 'react';
import { GeneralProps } from '../../interfaces/interfaces/General.props';

export interface SidebarProps
  extends GeneralProps,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  activeConversation: number;
  setActiveConversation: Dispatch<SetStateAction<number>>;
}
