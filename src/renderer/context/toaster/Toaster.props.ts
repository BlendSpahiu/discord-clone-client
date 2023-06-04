import { ToastrEnums } from '../../enums/toaster/Toaster.enums';

export interface Toast {
  toastId?: number;
  type: ToastrEnums;
  title: string;
  description?: string;
  timeout?: number;
}

export interface ToastrContextProps {
  toasts: Toast[];
  toastrTimeout?: number;
  addToast: (toast: Toast, timeout?: number) => void;
}
