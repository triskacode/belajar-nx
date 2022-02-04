import { StyledChattingAppLoginFeature } from './chatting-app-login-feature.style';

/* eslint-disable-next-line */
export interface ChattingAppLoginFeatureProps {}

export function ChattingAppLoginFeature(props: ChattingAppLoginFeatureProps) {
  return (
    <StyledChattingAppLoginFeature>
      <div className="container">
        <h1>Login Form</h1>
        <form>
          <label>
            <span>Email</span>
            <input type="text" name="email" />
          </label>
          <label>
            <span>Password</span>
            <input type="password" name="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    </StyledChattingAppLoginFeature>
  );
}

export default ChattingAppLoginFeature;
