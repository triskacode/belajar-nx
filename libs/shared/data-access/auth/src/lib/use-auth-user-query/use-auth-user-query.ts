import { UserEntity } from '@belajar-nx/shared-data-types';
import { getToken } from '@belajar-nx/shared-utils-cookie';
import { Http } from '@belajar-nx/shared-utils-http';
import { config } from '@belajar-nx/shared/environments';
import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

const getUser = async (
  signal?: AbortSignal | undefined
): Promise<UserEntity> => {
  const { data } = await Http.get(
    `${config.api.SERVER_API_BASE_URL}/auth/user`,
    {
      signal,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }
  );

  return data;
};

export const AUTH_USER_QUERY_KEY = 'auth.user';

export function useAuthUserQuery() {
  return useQuery(AUTH_USER_QUERY_KEY, ({ signal }) => getUser(signal), {
    enabled: !!getToken(),
    retry: (failureCount: number, error: AxiosError) => {
      if (error.response?.status === 401) {
        return false;
      }

      return failureCount < 3;
    },
  });
}