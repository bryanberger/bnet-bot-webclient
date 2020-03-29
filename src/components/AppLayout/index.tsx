import React from 'react'
import styled from '../../theme/styled'
import Chat from '../Chat'
import UserList from '../UserList'
import MessageBar from '../MessageBar'

const Wrapper = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  border: ${p => p.theme.grid.gap}px solid ${p => p.theme.colors.light};
  grid-gap: ${p => p.theme.grid.gap}px;
  grid-template-columns: auto 320px;
  grid-template-rows: auto 48px;
  grid-template-areas:
    'chat userlist'
    'messagebar userlist';
`

const AppLayout = () => {
  return (
    <Wrapper>
      <Chat />
      <UserList />
      <MessageBar />
    </Wrapper>
  )
}

export default AppLayout
