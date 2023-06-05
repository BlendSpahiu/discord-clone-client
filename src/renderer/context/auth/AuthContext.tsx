import {
  createContext,
  ReactElement,
  ReactNode,
  useLayoutEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastrEnums } from '../../enums/toaster/Toaster.enums';
import { useToast } from '../../hooks/useToast/useToast';
import { AuthResponseModel } from '../../interfaces/models/Response.model';
import { UserModel } from '../../interfaces/models/User.model';
import { Nullable } from '../../interfaces/types/Nullable';
import { useGetMe } from '../../rq/hooks/useGetMe';
import { errorResponse } from '../../utils/responses/errorResponse';
import { AuthContextProps } from './AuthContext.props';

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  logout: () => null,
});

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [user, setUser] = useState<Nullable<UserModel>>(null);

  const { addToast } = useToast();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/auth/login');
  };

  const userId = localStorage.getItem('user_id');
  const { data, error } = useGetMe(Number(userId) || 0);

  useLayoutEffect(() => {
    if (error) {
      addToast({
        title: 'Something went wrong.',
        type: ToastrEnums.ERROR,
        description: errorResponse(error).statusMessage,
      });
      navigate('/auth/login');
      return;
    }
    setUser((data as AuthResponseModel)?.user);
  }, []);

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
