import { render } from '@testing-library/react';

import DashboardUsersFeatureCreateUser from './dashboard-users-feature-create-user';

describe('DashboardUsersFeatureCreateUser', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardUsersFeatureCreateUser />);
    expect(baseElement).toBeTruthy();
  });
});
