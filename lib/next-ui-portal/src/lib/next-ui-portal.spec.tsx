import { render } from '@testing-library/react';

import NextUiPortal from './next-ui-portal';
import React from 'react';

describe('NextUiPortal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NextUiPortal />);
    expect(baseElement).toBeTruthy();
  });
});
