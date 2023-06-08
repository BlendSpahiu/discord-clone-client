import { HTMLMotionProps } from 'framer-motion';
import { GeneralProps } from '../../../interfaces/interfaces/General.props';
import { CSSProperties } from 'react';

type Size = 'sm' | 'xs' | 'md' | 'lg' | 'HUMONGOUS';
type UserStatus = 'online' | 'offline' | 'away' | 'appearOffline';

export interface AvatarProps extends GeneralProps, HTMLMotionProps<'div'> {
  size?: Size;
  selected?: boolean;
  serverName?: string;
  interactable?: boolean;
  username?: string;
  nickname?: string;
  userStatus?: UserStatus;
  isProfile?: boolean;
  avatarStyles?: CSSProperties;
}
