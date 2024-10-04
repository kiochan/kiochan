import { Viewport } from 'next/types'
import { globalConfig } from '../defs/global-config'
import './global.css'

import { Providers } from '../helper/providers'
import { getBodyClassName } from '@kiochan/next-ui-portal'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang={globalConfig.site.language}>
      <body className={getBodyClassName(globalConfig)}>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  )
}
