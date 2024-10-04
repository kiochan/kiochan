import { AppearanceConfig } from './appearance-config'
import { Pages } from './page-config'
import { SiteConfig } from './site-config'

export interface MainConfig {
  site: SiteConfig
  appearance: AppearanceConfig
  pages: Pages
}
