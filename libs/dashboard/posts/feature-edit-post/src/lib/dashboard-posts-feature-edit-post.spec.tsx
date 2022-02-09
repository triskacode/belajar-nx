import { render } from '@testing-library/react';

import DashboardPostsFeatureEditPost from './dashboard-posts-feature-edit-post';

describe('DashboardPostsFeatureEditPost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardPostsFeatureEditPost />);
    expect(baseElement).toBeTruthy();
  });
});
