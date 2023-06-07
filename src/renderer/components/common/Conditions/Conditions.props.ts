import { ReactNode } from 'react';

export interface ConditionProps {
  condition: boolean;
  children: ReactNode;
  fallback?: ReactNode;
}
