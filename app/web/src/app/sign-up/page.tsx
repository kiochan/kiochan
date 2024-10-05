import { SingleMessageContent } from '@kiochan/next-ui-portal'
import type { Metadata } from 'next/types'
import { formatMeta } from '../../helper/format-meta'

export const metadata: Metadata = formatMeta({
  page: 'sign-up',
})

export default function SignUpPage(): React.JSX.Element {
  return (
    <SingleMessageContent
      title='Registration not available.'
      description='The account system has been disabled.'
    />
  )
}
