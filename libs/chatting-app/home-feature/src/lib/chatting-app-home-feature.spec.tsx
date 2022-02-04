import { render } from '@testing-library/react';

import ChattingAppHomeFeature from './chatting-app-home-feature';

describe('ChattingAppHomeFeature', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChattingAppHomeFeature />);
    expect(baseElement).toBeTruthy();
  });
});
