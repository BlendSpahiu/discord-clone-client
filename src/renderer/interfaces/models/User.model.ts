import { UserRolesEnums } from '../../enums/user/UserRoles.enums';

export interface UserModel {
  id: number;
  email: number;
  phoneNumber: string;
  isDisabled: boolean;
  tag: number;
  role: UserRolesEnums;
  username: string;
  friends: string[];
  dateOfBirth: string;
  created_at: Date;
  updated_at: Date;
}
