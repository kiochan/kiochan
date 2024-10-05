import type { Viewport } from 'next/types'
import { globalConfig } from '../defs/global-config'
import './global.css'

import { Providers } from '../helper/providers'
import { getBodyClassName } from '@kiochan/next-ui-portal'

const initialScale = 1

export const viewport: Viewport = {
  width: 'device-width',
  initialScale,
  viewportFit: 'cover',
}

export interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps): React.JSX.Element {
  return (
    <html lang={globalConfig.site.language}>
      <body className={getBodyClassName(globalConfig)}>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  )
}
