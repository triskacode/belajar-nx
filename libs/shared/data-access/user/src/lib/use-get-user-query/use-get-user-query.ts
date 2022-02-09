import { UserEntity } from '@belajar-nx/shared-data-types';
import { getToken } from '@belajar-nx/shared-utils-cookie';
import { Http } from '@belajar-nx/shared-utils-http';
import { AxiosError, AxiosResponse } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import { USERS_QUERY_KEY } from '../use-get-users-query/use-get-users-query';

const getUser = (
  id: string,
  signal?: AbortSignal | undefined
): Promise<AxiosResponse<UserEntity>> => {
  return Http.get(`/users/${id}`, {
    signal,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export function useGetUserQuery(
  id: string
): UseQueryResult<UserEntity, AxiosError> {
  return useQuery([USERS_QUERY_KEY, id], ({ signal }) => getUser(id, signal), {
    enabled: !!id,
    retry: 3,
    select: (data) => data.data,
  });
}
