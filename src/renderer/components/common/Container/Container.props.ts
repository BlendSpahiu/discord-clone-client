import { HTMLMotionProps } from 'framer-motion';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type Size = Spacing;
type SpaceDirection = 'x' | 'y' | 'none';
type FlexDirection = 'row' | 'col';
type JustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
type Spacing = 'sm' | 'md' | 'lg' | 'xl' | 'none';
type AlignItems =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'revert'
  | 'self-end'
  | 'self-start';

export interface ContainerProps extends HTMLMotionProps<'div'> {
  size?: Size;
  styling?: boolean;
  flex?: boolean;
  spacing?: Spacing;
  spaceBetween?: Spacing;
  spaceDirection?: SpaceDirection;
  flexDirection?: FlexDirection;
  justifyContent?: JustifyContent;
  animatePresence?: boolean;
  condition?: boolean;
  alignItems?: AlignItems;
}
