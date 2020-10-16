import { withGlobalStyle } from '../src/decorators'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  withGlobalStyle
]
