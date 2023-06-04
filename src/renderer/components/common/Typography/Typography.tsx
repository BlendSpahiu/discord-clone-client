import { ElementType, ReactElement } from 'react';
import { TypographyProps } from './Typography.props';
import { TypographyEnums } from '../../../enums/typography/Typography.enums';
import classNames from 'classnames';

export const Typography = <T extends ElementType = 'p'>({
  children,
  className,
  color = 'white',
  size,
  helpText,
  as,
  ...rest
}: TypographyProps<T>): ReactElement => {
  const Component = as || TypographyEnums.PARAGRAPH;

  return (
    <Component
      className={classNames(
        className,
        color ? `color-${color}` : '',
        size ? `size-${size}` : '',
        helpText ? 'help-text' : ''
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};
