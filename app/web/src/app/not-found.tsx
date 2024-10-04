import { SingleMessageContent } from '@kiochan/next-ui-portal'
import { Metadata } from 'next/types'
import { formatMeta } from '../helper/format-meta'

export const metadata: Metadata = formatMeta({
  page: 'not_found',
})

export default function NotFound() {
  return (
    <SingleMessageContent
      title='404 - Page Not Found'
      description='Ops... Nothing here!'
    />
  )
}
