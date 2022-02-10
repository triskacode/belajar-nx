import { useGetUsersQuery } from '@belajar-nx/shared-data-access-user';
import { UserEntity } from '@belajar-nx/shared-data-types';
import {
  CreatePostDto,
  createPostValidationSchema,
  useCreatePostMutation,
} from '@belajar-nx/shared/data-access/post';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { StyledDashboardPostsFeatureCreatePost } from './dashboard-posts-feature-create-post.style';

export function DashboardPostsFeatureCreatePost() {
  const { data: users, error: errorUsers } = useGetUsersQuery();
  const {
    mutate: createPost,
    error,
    isSuccess,
    isLoading,
  } = useCreatePostMutation();
  const form = useFormik({
    initialValues: {
      title: '',
      content: '',
      userId: '',
    },
    validationSchema: createPostValidationSchema,
    onSubmit: (values) => {
      const payload: CreatePostDto = {
        title: values.title,
        content: values.content,
        userId: +values.userId,
      };

      createPost(payload);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      form.resetForm();
      toast('Create Success', { type: 'success' });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <StyledDashboardPostsFeatureCreatePost>
      <div className="container">
        <h1>Create Post</h1>

        {error?.response?.status === 400 && (
          <div className="errors">
            {error.response.data?.message.length > 0 ? (
              error.response.data?.message.map(
                (message: string, key: number) => (
                  <span key={key}>{message}</span>
                )
              )
            ) : (
              <span>Bad request, please try again later</span>
            )}
          </div>
        )}

        {error?.response?.status === 500 && (
          <div className="errors">Whoops, something went wrong</div>
        )}

        {errorUsers ? (
          <div className="errors">Whoops, something went wrong</div>
        ) : (
          <form onSubmit={form.handleSubmit}>
            <label>
              <span>Title</span>
              <input
                type="text"
                name="title"
                value={form.values.title}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {form.touched.title && form.errors.title ? (
                <span className="error">{form.errors.title}</span>
              ) : null}
            </label>
            <label>
              <span>Author</span>
              <select
                name="userId"
                value={form.values.userId}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              >
                <option hidden></option>
                {users?.map((user: UserEntity, key: number) => (
                  <option key={key} value={user.id}>
                    {user.email}
                  </option>
                ))}
              </select>
              {form.touched.userId && form.errors.userId ? (
                <span className="error">{form.errors.userId}</span>
              ) : null}
            </label>
            <label>
              <span>Content</span>
              <textarea
                name="content"
                rows={5}
                value={form.values.content}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              {form.touched.content && form.errors.content ? (
                <span className="error">{form.errors.content}</span>
              ) : null}
            </label>
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Loading' : 'Create'}
            </button>
          </form>
        )}
        <Link href={'/dashboard/posts'}>
          <button type="button" className="back">
            Back
          </button>
        </Link>
      </div>
    </StyledDashboardPostsFeatureCreatePost>
  );
}

export default DashboardPostsFeatureCreatePost;
