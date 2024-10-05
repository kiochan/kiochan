'use client'

import { useRouter } from 'next/navigation'
import { globalConfig } from '../defs/global-config'

import { NextUiPortal } from '@kiochan/next-ui-portal'

export interface ProvidersProps {
  children?: React.ReactNode
}

export function Providers(props: Readonly<ProvidersProps>): React.JSX.Element {
  const route = useRouter()

  return (
    <NextUiPortal
      // eslint-disable-next-line @typescript-eslint/unbound-method
      navigate={route.push}
      darkMode={globalConfig.appearance.darkMode}
      pages={globalConfig.pages}
    >
      {props.children}
    </NextUiPortal>
  )
}
