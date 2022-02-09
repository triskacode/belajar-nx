import Link from 'next/link';
import { StyledDashboardPostsFeatureEditPost } from './dashboard-posts-feature-edit-post.style';

export function DashboardPostsFeatureEditPost() {
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

        <form >
        {/* <form onSubmit={form.handleSubmit}>
          <label>
            <span>ID</span>
            <input type="text" name="id" value={user?.id} disabled />
          </label>
          <label>
            <span>Email</span>
            <input
              type="text"
              name="email"
              value={form.values.email}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.email && form.errors.email ? (
              <span className="error">{form.errors.email}</span>
            ) : null}
          </label>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Loading' : 'Update'}
          </button> */}
          <Link href={'/dashboard/posts'}>
            <button type="button" className='back'>Back</button>
          </Link>
        </form>
      </div>
    </StyledDashboardPostsFeatureEditPost>
  );
}

export default DashboardPostsFeatureEditPost;
