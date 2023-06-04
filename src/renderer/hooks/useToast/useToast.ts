import { useContext } from 'react';
import { ToastrContext } from '../../context/toaster/ToasterContext';

export const useToast = () => {
  return useContext(ToastrContext);
};
