import { FieldValues, UseFormRegister } from 'react-hook-form';

type SpaceDirection = 'x' | 'y' | 'none';
type Spacing = 'sm' | 'md' | 'lg' | 'xl' | 'none';

export interface GeneralProps {
  fullWidth?: boolean;
  spaceBetween?: SpaceDirection;
  spacing?: Spacing;
}

export interface FormRegisterProps<T extends FieldValues> {
  register: UseFormRegister<T>;
}
