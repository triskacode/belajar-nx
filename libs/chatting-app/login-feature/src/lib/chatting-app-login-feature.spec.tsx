import { render } from '@testing-library/react';

import ChattingAppLoginFeature from './chatting-app-login-feature';

describe('ChattingAppLoginFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChattingAppLoginFeature />);
    expect(baseElement).toBeTruthy();
  });
});
