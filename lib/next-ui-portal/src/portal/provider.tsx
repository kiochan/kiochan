'use client';

import { NextUIProvider, NextUIProviderProps } from '@nextui-org/system';
import { StrictMode, useEffect } from 'react';

export interface ProviderProps {
  navigate: NextUIProviderProps['navigate'];
  children: React.ReactNode;
  darkMode?: boolean;
}

export function Provider(props: ProviderProps) {
  useEffect(() => {
    if (props.darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [props.darkMode]);

  return (
    <StrictMode>
      <NextUIProvider navigate={props.navigate}>
        <main
          className={`${
            props.darkMode ? 'dark' : undefined
          } text-foreground bg-background`}
        >
          {props.children}
        </main>
      </NextUIProvider>
    </StrictMode>
  );
}
