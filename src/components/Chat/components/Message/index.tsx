import React from 'react'
import styled from '../../../../theme/styled'
import MessageModel from '../../../../services/CAPI/models/Message'

const Wrapper = styled.div`
  // display: flex;
  margin-bottom: ${p => p.theme.spacing[2]}px;
`

const Time = styled.time`
  font-size: 0.8rem;
  color: ${p => p.theme.colors.charcoal};
  // margin-right: ${p => p.theme.spacing[1]}px;
  margin-left: ${p => p.theme.spacing[1]}px;
  // flex-basis: 155px;
  // flex-shrink: 0;
`

const Name = styled.div`
  color: ${p => p.theme.colors.yellow};
`

const Text = styled.p`
  // margin-left: ${p => p.theme.spacing[1]}px;
  // flex: 1 1 0;
  min-width: 0;
`

const Sender = styled.div`
  display: flex;
  align-items: baseline;
`

export interface MessageProps {
  message: MessageModel
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const { user, date, text } = message
  return (
    <Wrapper>
      <Sender>
        <Name>{user.name}</Name>
        <Time>{date}</Time>
        {/* Today 7:34:01 PM */}
      </Sender>
      <Text>{text}</Text>
    </Wrapper>
  )
}

export default Message