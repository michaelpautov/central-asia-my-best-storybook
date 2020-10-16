import React, { Fragment } from 'react'
import { GlobalStyle } from '@devfest/components'

export default function withGlobalStyle(storyFn: any) {
  return (
    <Fragment>
      <GlobalStyle />
      {storyFn()}
    </Fragment>
  )
}
