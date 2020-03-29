import React from 'react'
import Message from './components/Message'
import styled from '../../theme/styled'

const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.spacing[2]}px;
  grid-area: chat;
  overflow-y: auto;
`

const Chat = () => {
  return (
    <Wrapper>
      <Message />
      <Message />
      <Message />
      <Message />
    </Wrapper>
  )
}

export default Chat
