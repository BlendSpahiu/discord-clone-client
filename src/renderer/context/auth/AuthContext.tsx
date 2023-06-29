import {
  createContext,
  ReactElement,
  ReactNode,
  useLayoutEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastrEnums } from '../../enums/toaster/Toaster.enums';
import { useGetMeLazyQuery, UserFragment } from '../../graphql/gen/graphql';
import { useToast } from '../../hooks/useToast/useToast';
import { Nullable } from '../../interfaces/types/Nullable';
import { AuthContextProps } from './AuthContext.props';
import { getHasuraUserId } from '../../utils/auth/jwt/getHasuraUserId';

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: false,
  logout: () => null,
});

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<Nullable<UserFragment>>(null);

  const { addToast } = useToast();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/auth/login');
  };

  const [getAuthUser, { loading: gqlLoading }] = useGetMeLazyQuery({
    onError: (error) => {
      addToast({
        title: 'Something went wrong.',
        type: ToastrEnums.ERROR,
        description: error.message,
      });
      setLoading(false);
      navigate('/auth/login');
    },
    onCompleted: (data) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setUser(data);
      setLoading(false);
    },
  });

  useLayoutEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      navigate('/auth/login');
      return;
    }
    const userId = getHasuraUserId(token || '');

    setLoading(true);
    getAuthUser({ variables: { id: Number(userId) } });
  }, []);

  return (
    <AuthContext.Provider value={{ user, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
