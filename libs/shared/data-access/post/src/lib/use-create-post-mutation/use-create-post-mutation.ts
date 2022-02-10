import { PostEntity } from '@belajar-nx/shared-data-types';
import { deleteToken, getToken } from '@belajar-nx/shared-utils-cookie';
import { Graphql } from '@belajar-nx/shared/utils/graphql';
import { ClientError, gql } from 'graphql-request';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import * as yup from 'yup';
import { POSTS_QUERY_KEY } from '../..';

export interface CreatePostDto {
  title: string;
  content: string;
  userId: number;
}

export const createPostValidationSchema = yup.object({
  title: yup.string().required('Title is required'),
  content: yup.string().required('Content is required'),
  userId: yup.number().required('Author is required'),
});

const CREATE_POST_MUTATION = gql`
  mutation CreatePost($createPostInput: CreatePostInput!) {
    createPost(createPostInput: $createPostInput) {
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

const createPost = (
  paylaod: CreatePostDto
): Promise<{ createPost: PostEntity }> => {
  return Graphql.request({
    document: CREATE_POST_MUTATION,
    variables: { createPostInput: paylaod },
    requestHeaders: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export function useCreatePostMutation(): UseMutationResult<
  { createPost: PostEntity },
  ClientError,
  CreatePostDto
> {
  const queryClient = useQueryClient();

  return useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(POSTS_QUERY_KEY);
    },
    onError: (error: ClientError) => {
      console.log(error);

      if (error.response?.status === 401) {
        deleteToken();
      }
    },
  });
}
