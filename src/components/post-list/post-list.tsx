/** @jsx createElement */
import { createElement, useEffect, useState } from 'react'
import {
  Item,
  ItemContainer,
} from '@devfest/components/post-list/post-list-components'

type Props = {
  bind?: any
}

export default function PostList({ bind }: Props) {
  const [data, setData] = useState()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setData(json))
  }, [])

  return (
    <ItemContainer>
      {data &&
        data.map((item: any) => (
          <Item key={item.id}>
            <h4>{item.title}</h4>
            <h5>{item.body}</h5>
          </Item>
        ))}
    </ItemContainer>
  )
}
