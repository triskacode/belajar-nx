import { PostEntity } from '@belajar-nx/shared-data-types';
import { deleteToken, getToken } from '@belajar-nx/shared-utils-cookie';
import { Graphql } from '@belajar-nx/shared/utils/graphql';
import { ClientError, gql } from 'graphql-request';
import { useMutation, useQueryClient } from 'react-query';
import * as yup from 'yup';
import { POSTS_QUERY_KEY } from '../..';

export interface EditPostDto {
  id: number;
  title: string;
  content: string;
  userId: number;
}

export const editPostValidationSchema = yup.object({
  id: yup.number().required('Id is required'),
  title: yup.string().required('Title is required'),
  content: yup.string().required('Content is required'),
  userId: yup.number().required('Author is required'),
});

const EDIT_POST_MUTATION = gql`
  mutation EditPost($editPostInput: EditPostInput!) {
    editPost(editPostInput: $editPostInput) {
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

const editPost = (
  paylaod: EditPostDto
): Promise<{ updatePost: PostEntity }> => {
  return Graphql.request({
    document: EDIT_POST_MUTATION,
    variables: { editPostInput: paylaod },
    requestHeaders: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};

export function useEditPostMutation() {
  const queryClient = useQueryClient();
  
  return useMutation(editPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(POSTS_QUERY_KEY);
    },
    onError: (error: ClientError) => {
      console.log(error);

      if(error.response.status === 401) {
        deleteToken();
      }
    }
  });
}
