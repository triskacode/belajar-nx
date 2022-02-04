import { render } from '@testing-library/react';

import Main from './main';

describe('Main', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Main children="Hello world" />);
    expect(baseElement).toBeTruthy();
  });
});
