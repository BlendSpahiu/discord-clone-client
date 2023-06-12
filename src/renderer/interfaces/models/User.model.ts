import { UserRolesEnums } from '../../enums/user/UserRoles.enums';

export interface UserModel {
  id: number;
  email: number;
  phone_number: string;
  isDisabled: boolean;
  tag: number;
  server_role: UserRolesEnums;
  username: string;
  friends: string[];
  date_of_birth: string;
  created_at: Date;
  updated_at: Date;
}
