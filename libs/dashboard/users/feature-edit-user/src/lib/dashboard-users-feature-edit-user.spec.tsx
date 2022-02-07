import { render } from '@testing-library/react';

import DashboardUsersFeatureEditUser from './dashboard-users-feature-edit-user';

describe('DashboardUsersFeatureEditUser', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardUsersFeatureEditUser />);
    expect(baseElement).toBeTruthy();
  });
});
