'use client'

import { Provider, ProviderProps } from './provider'
import { Navbar } from '../components/navbar'
import type { Pages } from '../types/page-config'

/* eslint-disable-next-line */
export interface NextUiPortalProps {
  navigate: ProviderProps['navigate']
  children?: React.ReactNode
  darkMode?: boolean
  pages: Readonly<Pages>
}

export function NextUiPortal(props: Readonly<NextUiPortalProps>) {
  return (
    <Provider navigate={props.navigate} darkMode={props.darkMode}>
      <div className='min-h-screen'>
        <Navbar pages={props.pages}></Navbar>
        {props.children}
      </div>
    </Provider>
  )
}
