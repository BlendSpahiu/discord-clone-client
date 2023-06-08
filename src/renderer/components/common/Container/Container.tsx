import { ReactElement } from 'react';
import { ContainerProps } from './Container.props';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import './Container.css';

export const Container = ({
  spacing = 'md',
  size = 'md',
  flex,
  flexDirection = 'row',
  justifyContent = 'start',
  children,
  spaceBetween = 'none',
  spaceDirection = 'none',
  className,
  styling = true,
  animatePresence = false,
  alignItems,
  ...rest
}: ContainerProps): ReactElement => {
  return (
    <>
      {animatePresence && (
        <AnimatePresence>
          <motion.div
            className={classNames(
              styling ? 'container' : '',
              spacing ? `container-spacing-${spacing}` : '',
              flex ? 'container-flex' : '',
              flexDirection ? `container-flex-${flexDirection}` : '',
              justifyContent ? `justify-content-${justifyContent}` : '',
              size ? `container-${size}` : '',
              spaceBetween
                ? `space-between-${spaceDirection}-${spaceBetween}`
                : '',
              alignItems ? `align-items-${alignItems}` : '',
              className
            )}
            {...rest}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      )}

      {!animatePresence && (
        <motion.div
          className={classNames(
            styling ? 'container' : '',
            spacing ? `container-spacing-${spacing}` : '',
            flex ? 'container-flex' : '',
            flexDirection ? `container-flex-${flexDirection}` : '',
            justifyContent ? `justify-content-${justifyContent}` : '',
            size ? `container-${size}` : '',
            spaceBetween
              ? `space-between-${spaceDirection}-${spaceBetween}`
              : '',
            alignItems ? `align-items-${alignItems}` : '',

            className
          )}
          {...rest}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};
