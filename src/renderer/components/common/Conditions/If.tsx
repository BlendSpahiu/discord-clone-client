import { ReactElement } from 'react';
import { ConditionProps } from './Conditions.props';

export const If = ({ condition, children }: ConditionProps): ReactElement =>
  condition ? <>{children}</> : <></>;
