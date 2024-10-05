import { render } from '@testing-library/react'

import { NextUiPortal, NextUiPortalProps } from './next-ui-portal'

describe('NextUiPortal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <NextUiPortal {...({} as unknown as NextUiPortalProps)} />,
    )
    expect(baseElement).toBeTruthy()
  })
})
