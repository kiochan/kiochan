import { SingleMessageContent } from '@kiochan/next-ui-portal'
import { Metadata } from 'next/types'
import { formatMeta } from '../../helper/format-meta'

export const metadata: Metadata = formatMeta({
  page: 'blog',
})

export default function BlogPage() {
  return (
    <SingleMessageContent
      title='Unauthorized'
      description='You may need to log in.'
      actionName='Log in Now!'
      routeTo={'/login'}
    />
  )
}
