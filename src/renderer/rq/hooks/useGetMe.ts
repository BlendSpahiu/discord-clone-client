import { useQuery } from 'react-query';
import {
  AuthResponseModel,
  HttpResponseModel,
} from '../../interfaces/models/Response.model';
import { getMe } from '../queries/getMe';

export const useGetMe = (id: number) =>
  useQuery<AuthResponseModel | HttpResponseModel>('fetch-me', () => getMe(id));
