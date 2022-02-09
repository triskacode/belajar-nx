import { UserEntity } from '@belajar-nx/shared-data-types';
import { getToken } from '@belajar-nx/shared-utils-cookie';
import { Http } from '@belajar-nx/shared-utils-http';
import { AxiosError, AxiosResponse } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

const getUsers = (
  signal?: AbortSignal | undefined
): Promise<AxiosResponse<UserEntity[]>> => {
  return Http.get(`/users`, {
    signal,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const USERS_QUERY_KEY = 'users';

export function useGetUsersQuery(): UseQueryResult<UserEntity[], AxiosError> {
  return useQuery(USERS_QUERY_KEY, ({ signal }) => getUsers(signal), {
    retry: 3,
    select: (data) => data.data,
  });
}
