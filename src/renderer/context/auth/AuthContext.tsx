import {
  createContext,
  ReactElement,
  ReactNode,
  useLayoutEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../../api/auth/auth';
import { ToastrEnums } from '../../enums/toaster/Toaster.enums';
import { useToast } from '../../hooks/useToast/useToast';
import { AuthResponseModel } from '../../interfaces/models/Response.model';
import { UserModel } from '../../interfaces/models/User.model';
import { Nullable } from '../../interfaces/types/Nullable';
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

  useLayoutEffect(() => {
    const fetchMe = async () => {
      const userId = localStorage.getItem('user_id');
      const res = await getMe(Number(userId) || 0);
      if (!res.statusIsOk) {
        addToast({
          title: 'Something went wrong.',
          type: ToastrEnums.ERROR,
          description: res.statusMessage,
        });
        navigate('/auth/login');
        return;
      }

      setUser((res as AuthResponseModel).user);
    };

    fetchMe();
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate('/auth/login');
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
