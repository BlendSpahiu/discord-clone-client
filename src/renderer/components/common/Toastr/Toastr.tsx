import { ReactElement } from 'react';
import { createPortal } from 'react-dom';
import {
  CheckCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import { ToastrEnums } from '../../../enums/toaster/Toaster.enums';
import { Button } from '../Button/Button';
import { ToastrProps } from './Toastr.props';

export const Toastr = ({
  className,
  title,
  description,
  toastId,
  type = ToastrEnums.SUCCESS,
  removeToast,
  ...rest
}: ToastrProps): ReactElement => {
  const toast = document.querySelector('#toast');

  return createPortal(
    <AnimatePresence>
      {title && (
        <motion.div
          key="toastr"
          layout
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.5, x: 350 }}
          className={classNames(
            'toast',
            type === ToastrEnums.SUCCESS ? 'toast-success' : 'toast-error',
            className
          )}
          {...rest}
        >
          <div className="toast-header">
            <div className="toast-header-title">
              {type === ToastrEnums.SUCCESS ? (
                <CheckCircleIcon
                  width={24}
                  height={24}
                  style={{ color: 'lightgreen' }}
                />
              ) : (
                <XCircleIcon width={24} height={24} style={{ color: 'red' }} />
              )}
              <p style={{ marginLeft: 4 }}>{title}</p>
            </div>
            <Button
              onClick={() => removeToast(toastId)}
              fullWidth={false}
              variant="text"
            >
              <XMarkIcon style={{ color: 'white', width: 24, height: 24 }} />
            </Button>
          </div>
          <div className="toast-body">
            <p>{description}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    toast as HTMLElement
  );
};
