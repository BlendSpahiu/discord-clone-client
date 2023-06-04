import {
  DetailedHTMLProps,
  HTMLAttributes,
  HTMLInputTypeAttribute,
} from 'react';
import { LabelProps } from '../Label/Label.props';
import { FormRegisterProps } from '../../../interfaces/interfaces/General.props';
import { FieldError, FieldValues } from 'react-hook-form';

export interface InputProps<T extends FieldValues>
  extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    FormRegisterProps<T> {
  name?: string;
  fullWidth?: boolean;
  type?: HTMLInputTypeAttribute;
  autoComplete?: string;
}

export interface InputGroupProps<T extends FieldValues> {
  inputProps: InputProps<T>;
  labelProps: LabelProps;
  error?: FieldError;
  containerClassName?: string;
  required?: boolean;
}
