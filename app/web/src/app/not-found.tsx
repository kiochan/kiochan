import { SingleMessageContent } from '@kiochan/next-ui-portal'
import type { Metadata } from 'next/types'
import { formatMeta } from '../helper/format-meta'

export const metadata: Metadata = formatMeta({
  page: 'not_found',
})

export default function NotFound(): React.JSX.Element {
  return (
    <SingleMessageContent
      title='404 - Page Not Found'
      description='Ops... Nothing here!'
    />
  )
}
