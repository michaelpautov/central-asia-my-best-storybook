/** @jsx createElement */
import { createElement } from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '@devfest/store'

export default function Header() {
  const userName = useSelector((state: AppState) => state.user.userName)
  return (
    <header style={{border: '1px solid yellow', margin: '10px', padding: '10px'}}>
      <h1>Header</h1>
      <h2>user: {userName}</h2>
    </header>
  )
}
