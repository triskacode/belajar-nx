import { render } from '@testing-library/react';

import DashboardUsersFeatureDetailUser from './dashboard-users-feature-detail-user';

describe('DashboardUsersFeatureDetailUser', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardUsersFeatureDetailUser />);
    expect(baseElement).toBeTruthy();
  });
});
