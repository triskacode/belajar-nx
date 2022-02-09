import {
  EditUserDto,
  editUserValidationSchema,
  useEditUserMutation,
  useGetUserQuery,
} from '@belajar-nx/shared-data-access-user';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { StyledDashboardUsersFeatureEditUser } from './dashboard-users-feature-edit-user.style';

export function DashboardUsersFeatureEditUser() {
  const { id } = useRouter().query;
  const { data: user } = useGetUserQuery(id as string);
  const {
    mutate: updateUser,
    isLoading,
    isSuccess,
    error,
  } = useEditUserMutation(id as string);
  const form = useFormik<EditUserDto>({
    initialValues: {
      email: user?.email ?? '',
    },
    validationSchema: editUserValidationSchema,
    onSubmit: (values) => {
      updateUser(values);
    },
  });

  useEffect(() => {
    if (user && user.email) {
      form.setValues({
        email: user.email,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      toast('Update Success', { type: 'success' });
    }
  }, [isSuccess, error]);

  return (
    <StyledDashboardUsersFeatureEditUser>
      <div className="container">
        <h1>Edit User</h1>
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

        <form onSubmit={form.handleSubmit}>
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
          </button>
          <Link href={'/dashboard/users'}>
            <button type="button" className='back'>Back</button>
          </Link>
        </form>
      </div>
    </StyledDashboardUsersFeatureEditUser>
  );
}

export default DashboardUsersFeatureEditUser;
