import { PostEntity } from '@belajar-nx/shared-data-types';
import { getToken } from '@belajar-nx/shared-utils-cookie';
import { Graphql } from '@belajar-nx/shared/utils/graphql';
import { gql, ClientError } from 'graphql-request';
import { useQuery, UseQueryResult } from 'react-query';

const GET_POSTS_QUERY = gql`
  query GetPosts {
    posts {
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

const getPosts = (
  signal: AbortSignal | undefined
): Promise<{ posts: PostEntity[] }> => {
  return Graphql.request({
    document: GET_POSTS_QUERY,
    signal,
    requestHeaders: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export const POSTS_QUERY_KEY = 'posts';

export function useGetPostsQuery(): UseQueryResult<PostEntity[], ClientError> {
  return useQuery(POSTS_QUERY_KEY, ({ signal }) => getPosts(signal), {
    retry: 3,
    select: (data) => data.posts,
  });
}
