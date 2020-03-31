import React from 'react'
import Message from './components/Message'
import styled from '../../theme/styled'
import useClientContext from '../../providers/ClientProvider/hook'

const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.spacing[2]}px;
  grid-area: chat;
  overflow-y: auto;
`

const Chat = () => {
  const { state } = useClientContext()
  return (
    <Wrapper>
      {state.messages &&
        Array.from(state.messages).map(message => (
          <Message key={message.id} message={message} />
        ))}
    </Wrapper>
  )
}

export default Chat
