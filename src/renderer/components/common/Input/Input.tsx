import { ReactElement } from 'react';
import { InputProps } from './Input.props';
import './Input.css';
import classNames from 'classnames';

export const Input = <T extends object>({
  name,
  fullWidth,
  register,
  className,
  autoComplete,
  ...rest
}: InputProps<T>): ReactElement => {
  return (
    <input
      className={classNames('input', className, fullWidth ? 'full-width' : '')}
      autoComplete={autoComplete}
      {...register(name)}
      {...rest}
    />
  );
};
