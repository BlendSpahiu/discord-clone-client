import jwtDecode from 'jwt-decode';
import { UserRolesEnums } from '../../../enums/user/UserRoles.enums';

interface HasuraClaims {
  'https://hasura.io/jwt/claims': {
    'x-hasura-allowed-roles': [UserRolesEnums.USER];
    'x-hasura-user-id': string;
    'x-hasura-role': UserRolesEnums;
  };
  iat: number;
  exp: number;
}

export const getHasuraUserId = (token: string) => {
  const decoded = jwtDecode(token);

  return (decoded as HasuraClaims)['https://hasura.io/jwt/claims'][
    'x-hasura-user-id'
  ];
};
