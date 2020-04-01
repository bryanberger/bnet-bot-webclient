import React from 'react'

import Message from './components/Message'
import styled from '../../theme/styled'
import useClientContext from '../../providers/ClientProvider/hook'
import useAutoScroll from '../../hooks/useAutoScroll'

const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.spacing[2]}px;
  grid-area: chat;
  overflow-y: auto;
`

const Chat: React.FC = ({ ...rest }) => {
  const { state } = useClientContext()
  const chatRef = useAutoScroll()

  return (
    <Wrapper ref={chatRef} {...rest}>
      {state.messages &&
        Array.from(state.messages).map(message => (
          <Message key={message.id} message={message} />
        ))}
    </Wrapper>
  )
}

export default Chat
