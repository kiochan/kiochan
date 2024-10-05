import { SingleMessageContent } from '@kiochan/next-ui-portal'
import type { Metadata } from 'next/types'
import { formatMeta } from '../../helper/format-meta'

export const metadata: Metadata = formatMeta({
  page: 'tools',
})

export default function ToolsPage(): React.JSX.Element {
  return (
    <SingleMessageContent
      title="Kio's Tools"
      description='Here will upload some useful tools.'
    />
  )
}
