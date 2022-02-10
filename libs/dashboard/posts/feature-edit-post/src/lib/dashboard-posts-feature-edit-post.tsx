import { useGetUsersQuery } from '@belajar-nx/shared-data-access-user';
import { UserEntity } from '@belajar-nx/shared-data-types';
import {
  editPostValidationSchema,
  useEditPostMutation,
  useGetPostQuery,
} from '@belajar-nx/shared/data-access/post';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { StyledDashboardPostsFeatureEditPost } from './dashboard-posts-feature-edit-post.style';

export function DashboardPostsFeatureEditPost() {
  const { id } = useRouter().query;
  const { data: users, error: errorUsers } = useGetUsersQuery();
  const { data: post } = useGetPostQuery(id as string);
  const {
    mutate: editPost,
    isLoading,
    isSuccess,
    error,
  } = useEditPostMutation();
  const form = useFormik({
    initialValues: {
      id: post?.id ?? '',
      title: post?.title ?? '',
      content: post?.content ?? '',
      userId: post?.user?.id ?? '',
    },
    validationSchema: editPostValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <StyledDashboardPostsFeatureEditPost>
      <div className="container">
        <h1>Edit Post</h1>
        {/* {error?.response?.status === 400 && (
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
        )} */}

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
    </StyledDashboardPostsFeatureEditPost>
  );
}

export default DashboardPostsFeatureEditPost;
