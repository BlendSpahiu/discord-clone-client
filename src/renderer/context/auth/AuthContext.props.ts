import { UserFragment } from '../../graphql/gen/graphql';
import { UserModel } from '../../interfaces/models/User.model';
import { Nullable } from '../../interfaces/types/Nullable';

export interface AuthContextProps {
  user: Nullable<UserFragment>;
  loading: boolean;
  logout: () => void;
}
