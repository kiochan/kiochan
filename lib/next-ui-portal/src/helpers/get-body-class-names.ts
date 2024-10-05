import type { MainConfig } from '../types'

export function getBodyClassName(config: MainConfig): string {
  const darkMode = config.appearance.darkMode

  const classNames = ['text-foreground', 'bg-background']
  if (darkMode) {
    return ['dark', ...classNames].join(' ')
  }

  return classNames.join(' ')
}
