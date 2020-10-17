import * as React from 'react'
import { Fragment } from 'react'
import fetchMock from 'fetch-mock'

fetchMock.config.overwriteRoutes = true

export default function withMockedResult(mocks?: ReadonlyArray<MockResponse>) {
  mocks?.forEach(({ url, payload }) => {
    fetchMock.mock(url, payload)
  })
  return (storyFn: any) => <Fragment>{storyFn()}</Fragment>
}
