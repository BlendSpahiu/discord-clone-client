import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from 'react';
import { HTMLMotionProps } from 'framer-motion';
import { GeneralProps } from '../../interfaces/interfaces/General.props';

export interface DirectMessagesProps
  extends GeneralProps,
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface DirectMessagesConversationsProps
  extends GeneralProps,
    HTMLMotionProps<'div'> {}

export interface DMHeaderInfoProps {
  showUserProfile: boolean;
  setShowUserProfile: Dispatch<SetStateAction<boolean>>;
}
