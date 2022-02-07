import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DashboardUsersFeatureCreateUserProps {}

const StyledDashboardUsersFeatureCreateUser = styled.div`
  color: pink;
`;

export function DashboardUsersFeatureCreateUser(
  props: DashboardUsersFeatureCreateUserProps
) {
  return (
    <StyledDashboardUsersFeatureCreateUser>
      <h1>Welcome to DashboardUsersFeatureCreateUser!</h1>
    </StyledDashboardUsersFeatureCreateUser>
  );
}

export default DashboardUsersFeatureCreateUser;
