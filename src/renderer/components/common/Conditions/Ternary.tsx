import { ReactElement } from 'react';
import { ConditionProps } from './Conditions.props';

export const Ternary = ({
  children,
  condition,
  fallback,
}: ConditionProps): ReactElement =>
  condition ? <>{children}</> : <>{fallback}</>;
