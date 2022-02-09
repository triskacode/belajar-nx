import { UserEntity } from '@belajar-nx/shared-data-types';
import { getToken } from '@belajar-nx/shared-utils-cookie';
import { Http } from '@belajar-nx/shared-utils-http';
import { config } from '@belajar-nx/shared/environments';
import { AxiosError, AxiosResponse } from 'axios';
import { useQuery, UseQueryResult } from 'react-query';

const getUser = (
  signal?: AbortSignal | undefined
): Promise<AxiosResponse<UserEntity>> => {
  return Http.get(`${config.api.SERVER_HTTP}/auth/user`, {
    signal,
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const AUTH_USER_QUERY_KEY = 'auth.user';

export function useAuthUserQuery(): UseQueryResult<UserEntity, AxiosError> {
  return useQuery(AUTH_USER_QUERY_KEY, ({ signal }) => getUser(signal), {
    enabled: !!getToken(),
    retry: (failureCount: number, error: AxiosError) => {
      if (error.response?.status === 401) {
        return false;
      }

      return failureCount < 3;
    },
    select: (data) => data.data,
  });
}
