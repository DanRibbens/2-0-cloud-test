import { LINK_FIELDS } from './link'

export const HEADER = `
  Header {
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
  }
`

export const HEADER_QUERY = `
query Header {
  ${HEADER}
}
`

export const FOOTER = `
  Header {
    navItems {
      link ${LINK_FIELDS({ disableAppearance: true })}
		}
  }
`

export const FOOTER_QUERY = `
query Header {
  ${FOOTER}
}
`

export const SETTINGS = `
  Settings {
    productsPage {
      slug
    }
  }
`

export const SETTINGS_QUERY = `
query Settings {
  ${SETTINGS}
}
`
