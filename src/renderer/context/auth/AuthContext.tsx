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

  const userId = localStorage.getItem('user_id');
  const [getAuthUser, { loading: gqlLoading }] = useGetMeLazyQuery({
    onError: (error) => {
      addToast({
        title: 'Something went wrong.',
        type: ToastrEnums.ERROR,
        description: error.message,
      });
      navigate('/auth/login');
    },
    onCompleted: (data) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setUser(data?.users_by_pk);
    },
    variables: { id: Number(userId) },
  });

  useLayoutEffect(() => {
    getAuthUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
