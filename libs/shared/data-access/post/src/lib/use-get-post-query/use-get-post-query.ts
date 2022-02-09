import { PostEntity } from '@belajar-nx/shared-data-types';
import { getToken } from '@belajar-nx/shared-utils-cookie';
import { Graphql } from '@belajar-nx/shared/utils/graphql';
import { ClientError, gql } from 'graphql-request';
import { useQuery, UseQueryResult } from 'react-query';
import { POSTS_QUERY_KEY } from '../..';

const GET_POST_QUERY = gql`
  query GetPost($id: Int!) {
    post(id: $id) {
      id
      title
      content
      user {
        id
        email
      }
    }
  }
`;

const getPost = (
  id: string,
  signal: AbortSignal | undefined
): Promise<{ post: PostEntity }> => {
  return Graphql.request({
    document: GET_POST_QUERY,
    variables: { id: +id },
    signal,
    requestHeaders: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export function useGetPostQuery(
  id: string
): UseQueryResult<PostEntity, ClientError> {
  return useQuery([POSTS_QUERY_KEY, id], ({ signal }) => getPost(id, signal), {
    enabled: !!id,
    retry: 3,
    select: (data) => data.post,
  });
}
