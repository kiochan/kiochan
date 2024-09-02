import type { Metadata } from 'next/types';
import { formatMeta } from '../helper/format-meta';
import { SingleMessageContent } from '@kiochan/next-ui-portal';

export const metadata: Metadata = formatMeta({
  page: 'home',
});

export default function Index() {
  return (
    <SingleMessageContent
      title="Just Home"
      description="I'm Lazy"
      actionName="Check This!"
      routeTo="/tools"
    />
  );
}
