import {
  QueryFunction,
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from 'react-query';
import { AxiosError } from 'axios';

export const useRQuery = <T>(
  fn: () => any,
  queryKey?: QueryKey,
  options?: UseQueryOptions<T, AxiosError, T, QueryKey>
): UseQueryResult<T, AxiosError> => {
  return useQuery<T, AxiosError, T, QueryKey>(
    queryKey || '',
    () => fn(),
    options
  );
};
