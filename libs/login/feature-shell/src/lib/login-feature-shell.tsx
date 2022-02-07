import {
  LoginDto,
  useLoginMutation,
  loginValidationSchema,
} from '@belajar-nx/shared-data-access-auth';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { StyledLoginFeatureShell } from './login-feature-shell.style';

export function LoginFeatureShell() {
  const router = useRouter();
  const { mutate: login, isLoading, isSuccess, error } = useLoginMutation();
  const form = useFormik<LoginDto>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      login(values);
    },
  });

  useEffect(() => {
    if (isSuccess) {
      router.push('/dashboard');
      toast('Login Success', { type: 'success' });
    }
  }, [isSuccess, router]);

  return (
    <StyledLoginFeatureShell>
      <div className="container">
        <h1>Login Form</h1>
        {error?.response?.status === 401 && (
          <div className="errors">Invalid email or password</div>
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
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Loading' : 'Login'}
          </button>
        </form>
      </div>
    </StyledLoginFeatureShell>
  );
}

export default LoginFeatureShell;
