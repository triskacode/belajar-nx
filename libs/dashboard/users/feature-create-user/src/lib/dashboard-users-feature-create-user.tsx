import {
  CreateUserDto,
  createUserValidationSchema,
  useCreateUserMutation,
} from '@belajar-nx/shared-data-access-user';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { StyledDashboardUsersFeatureCreateUser } from './dashboard-users-feature-create-user.style';

export function DashboardUsersFeatureCreateUser() {
  const {
    mutate: createUser,
    error,
    isSuccess,
    isLoading,
  } = useCreateUserMutation();
  const form = useFormik<CreateUserDto>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: createUserValidationSchema,
    onSubmit: (values) => {
      createUser(values);
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
    <StyledDashboardUsersFeatureCreateUser>
      <div className="container">
        <h1>Create User</h1>

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
          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={form.values.password}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.password && form.errors.password ? (
              <span className="error">{form.errors.password}</span>
            ) : null}
          </label>
          <label>
            <span>Confirm Password</span>
            <input
              type="password"
              name="confirmPassword"
              value={form.values.confirmPassword}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            {form.touched.confirmPassword && form.errors.confirmPassword ? (
              <span className="error">{form.errors.confirmPassword}</span>
            ) : null}
          </label>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Loading' : 'Create'}
          </button>
          <Link href={'/dashboard/users'}>
            <button type="button" className="back">
              Back
            </button>
          </Link>
        </form>
      </div>
    </StyledDashboardUsersFeatureCreateUser>
  );
}

export default DashboardUsersFeatureCreateUser;
