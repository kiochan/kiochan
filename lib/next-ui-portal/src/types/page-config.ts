export interface PageConfig<ID extends string = string> {
  name: string
  /**
   * If it's set to `null`, it will display site name only.
   */
  title: string | null
  id: ID
  /**
   * There are some pages dosen't have a static uri,
   * set `null` for ignorance
   */
  href: string | null
  description: string
  showOnNavbar: boolean
  showOnSidebar: boolean
  parentPage?: PageConfig['id']
}

export type Pages = PageConfig[]
