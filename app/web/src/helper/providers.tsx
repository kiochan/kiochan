'use client'

import { useRouter } from 'next/navigation'
import { globalConfig } from '../defs/global-config'

import { NextUiPortal } from '@kiochan/next-ui-portal'

export interface ProvidersProps {
  children?: React.ReactNode
}

export function Providers(props: Readonly<ProvidersProps>) {
  const route = useRouter()

  return (
    <NextUiPortal
      navigate={route.push}
      darkMode={globalConfig.appearance.darkMode}
      pages={globalConfig.pages}
    >
      {props.children}
    </NextUiPortal>
  )
}
