import { SingleMessageContent } from '@kiochan/next-ui-portal'
import type { Metadata } from 'next/types'
import { formatMeta } from '../../helper/format-meta'

export const metadata: Metadata = formatMeta({
  page: 'login',
})

export default function LoginPage(): React.JSX.Element {
  return (
    <SingleMessageContent
      title='Login not available.'
      description='The account system has been disabled.'
    />
  )
}
