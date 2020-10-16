import { withGlobalStyle } from '@devfest/decorators'

export const decorators = [withGlobalStyle]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
