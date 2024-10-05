import type { AppearanceConfig } from './appearance-config'
import type { Pages } from './page-config'
import type { SiteConfig } from './site-config'

export interface MainConfig {
  site: SiteConfig
  appearance: AppearanceConfig
  pages: Pages
}
