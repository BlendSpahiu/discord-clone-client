import {
  ReactElement,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from 'react';
import { Toast, ToastrContextProps } from './Toaster.props';
import { Toastr } from '../../components/common/Toastr/Toastr';

export const ToastrContext = createContext<ToastrContextProps>({
  toasts: [],
  toastrTimeout: 3000,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addToast: (_toast: Toast, _timeout?: number) => null,
});

export const ToastrProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [toastrTimeout, setToastrTimeout] = useState<number>(3000);

  const addToast = (toast: Toast, timeout?: number) => {
    if (timeout) {
      setToastrTimeout(timeout);
    }
    setToasts([...toasts, { ...toast, toastId: toasts.length + 1 }]);
  };

  const removeToast = (toastId: number) => {
    console.log('HERE');

    setToasts(toasts.filter((toast) => toast.toastId === toastId));
  };

  useEffect(() => {
    const t = setTimeout(() => {
      setToasts(
        toasts.slice(toasts.length === 1 ? toasts.length : toasts.length - 1)
      );
    }, toastrTimeout);
    if (toasts.length === 0) {
      clearTimeout(t);
    }
    return () => {
      clearTimeout(t);
    };
  }, [toasts]);

  return (
    <ToastrContext.Provider value={{ toasts, toastrTimeout, addToast }}>
      {toasts.map((toast) => (
        <Toastr
          key={toast.toastId}
          type={toast.type}
          title={toast.title}
          description={toast.description}
          toastId={toasts.length - 1}
          timeout={toastrTimeout}
          removeToast={removeToast}
        />
      ))}
      {children}
    </ToastrContext.Provider>
  );
};
