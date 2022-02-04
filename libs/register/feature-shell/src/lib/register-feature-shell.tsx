import { StyledRegisterFeatureShell } from './register-feature-shell.style';

export function RegisterFeatureShell() {
  return (
    <StyledRegisterFeatureShell>
      <div className="container">
        <h1>Register Form</h1>
        <form>
          <label>
            <span>Email</span>
            <input type="text" name="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="password" />
          </label>
          <label>
            <span>Confirm Password</span>
            <input type="password" name="confirmPassword" />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </StyledRegisterFeatureShell>
  );
}

export default RegisterFeatureShell;
