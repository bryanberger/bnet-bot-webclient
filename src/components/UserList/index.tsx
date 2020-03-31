import React, { useEffect, useState } from 'react'
import User from './components/User'
import styled from '../../theme/styled'
import useClientContext from '../../providers/ClientProvider/hook'

const Wrapper = styled.div`
  grid-area: userlist;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  background: ${p => p.theme.colors.primary};
`

const ChannelName = styled.div`
  min-height: 38px;
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
  const { state } = useClientContext()
  const [channelName, setChannelName] = useState('')

  useEffect(() => {
    if (typeof state.client !== 'undefined')
      setChannelName(`${state.client.channel} (${state.users.size})`)
  }, [state.client, state.users])

  return (
    <Wrapper>
      {channelName && <ChannelName>{channelName}</ChannelName>}
      <List>
        {state.users &&
          Array.from(state.users.values()).map(user => (
            <User key={user.id} user={user} />
          ))}
      </List>
    </Wrapper>
  )
}

export default UserList
