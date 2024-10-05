import type { Metadata } from 'next/types'
import { globalConfig } from '../defs/global-config'

export type PageID = (typeof globalConfig)['pages'][number]['id']
export type PageTitle = (typeof globalConfig)['pages'][number]['title']

export interface MetaSettings {
  page: PageID
}

type SiteName = typeof globalConfig.site.name

export function formatTitle(): SiteName
export function formatTitle(title: null): SiteName
export function formatTitle(title: undefined): SiteName
export function formatTitle<T extends PageTitle>(title: T): `${T} - ${SiteName}`
export function formatTitle<T extends PageTitle>(
  title?: T | null,
): SiteName | `${T} - ${SiteName}` {
  if (title !== null && title !== undefined) {
    return `${title} - ${globalConfig.site.name}`
  }
  return globalConfig.site.name
}

export function formatMeta(settings: MetaSettings): Metadata {
  const firstPageIndex = 0
  const currentPageConfig =
    globalConfig.pages.filter(({ id }) => id === settings.page)[
      firstPageIndex
    ] ?? {}

  const title = formatTitle(currentPageConfig.title)

  return {
    title,
  }
}
