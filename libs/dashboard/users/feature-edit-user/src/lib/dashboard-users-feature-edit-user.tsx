import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DashboardUsersFeatureEditUserProps {}

const StyledDashboardUsersFeatureEditUser = styled.div`
  color: pink;
`;

export function DashboardUsersFeatureEditUser(
  props: DashboardUsersFeatureEditUserProps
) {
  return (
    <StyledDashboardUsersFeatureEditUser>
      <h1>Welcome to DashboardUsersFeatureEditUser!</h1>
    </StyledDashboardUsersFeatureEditUser>
  );
}

export default DashboardUsersFeatureEditUser;
