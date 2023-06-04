import { UserModel } from '../../interfaces/models/User.model';
import { Nullable } from '../../interfaces/types/Nullable';

export interface AuthContextProps {
  user: Nullable<UserModel>;
  logout: () => void;
}
