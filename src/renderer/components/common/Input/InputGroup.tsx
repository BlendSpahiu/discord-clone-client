import { ReactElement } from 'react';
import { InputGroupProps } from './Input.props';
import { Label } from '../Label/Label';
import { Input } from './Input';
import classNames from 'classnames';
import { FieldError } from '../Forms/FieldError/FieldError';

export const InputGroup = <T extends object>({
  inputProps,
  labelProps,
  error,
  required,
  containerClassName,
}: InputGroupProps<T>): ReactElement => {
  return (
    <div className={classNames('input-wrapper', containerClassName)}>
      {labelProps.label && (
        <Label {...labelProps}>
          {labelProps.label}
          {required && (
            <span
              style={{
                color: 'red',
                fontSize: 10,
                marginLeft: 4,
                position: 'relative',
                bottom: 4,
              }}
            >
              *
            </span>
          )}
        </Label>
      )}
      <Input {...inputProps} />
      {error && <FieldError error={error} />}
    </div>
  );
};
