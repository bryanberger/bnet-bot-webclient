import React from 'react'
import User from './components/User'
import styled from '../../theme/styled'

const Wrapper = styled.div`
  grid-area: userlist;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background: ${p => p.theme.colors.primary};
`

const ChannelName = styled.div`
  background: ${p => p.theme.colors.accent};
  padding: ${p => p.theme.spacing[1]}px ${p => p.theme.spacing[2]}px;
  color: ${p => p.theme.colors.black};
  font-weight: 700;
  text-align: center;
  flex-shrink: 1;
`

const List = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: ${p => p.theme.spacing[1]}px;
`

const UserList = () => {
  return (
    <Wrapper>
      <ChannelName>Clan Orb (40)</ChannelName>
      <List>
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </List>
    </Wrapper>
  )
}

export default UserList
