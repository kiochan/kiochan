'use client'

import type { NextUIProviderProps } from '@nextui-org/system'
import { NextUIProvider } from '@nextui-org/system'
import { StrictMode, useEffect } from 'react'

export interface ProviderProps {
  navigate: NextUIProviderProps['navigate']
  children: React.ReactNode
  darkMode?: boolean
}

export function Provider(props: ProviderProps): React.JSX.Element {
  const isDarkMode: boolean = props.darkMode ?? true

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <StrictMode>
      <NextUIProvider navigate={props.navigate}>
        <main
          className={`${
            isDarkMode ? 'dark' : undefined
          } text-foreground bg-background`}
        >
          {props.children}
        </main>
      </NextUIProvider>
    </StrictMode>
  )
}
