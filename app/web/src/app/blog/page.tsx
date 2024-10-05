import { SingleMessageContent } from '@kiochan/next-ui-portal'
import type { Metadata } from 'next/types'
import { formatMeta } from '../../helper/format-meta'
import React from 'react'

export const metadata: Metadata = formatMeta({
  page: 'blog',
})

export default function BlogPage(): React.JSX.Element {
  return (
    <SingleMessageContent
      title='Unauthorized'
      description='You may need to log in.'
      actionName='Log in Now!'
      routeTo={'/login'}
    />
  )
}
