import React, { useEffect } from 'react'
import styled from '../../../../theme/styled'
import MessageModel from '../../../../services/CAPI/models/Message'
import { CAPI } from '../../../../services/CAPI/interface'
import { Theme } from '../../../../theme'
import useClientContext from '../../../../providers/ClientProvider/hook'

const Wrapper = styled.div`
  margin-bottom: ${p => p.theme.spacing[2]}px;
`

const Time = styled.time`
  display: block;
  font-size: 0.8rem;
  color: ${p => p.theme.colors.charcoal};
`

const Name = styled.div<{ isSelf: boolean }>`
  display: inline-block;
  margin-right: ${p => p.theme.spacing[0]}px;
  color: ${p => (p.isSelf ? p.theme.colors.mint : p.theme.colors.yellow)};
`

const Text = styled.div<{ type: CAPI.MessageTypes }>`
  display: inline-block;
  min-width: 0;
  color: ${p => handleTextColor(p.theme.colors, p.type)};
`

const From = styled.div`
  display: inline-block;
  margin-right: ${p => p.theme.spacing[0]}px;
  color: ${p => p.theme.colors.orange};
  & > div {
    margin-right: 0;
  }
`

const handleTextColor = (colors: Theme['colors'], type: CAPI.MessageTypes) => {
  switch (type) {
    case 'Whisper':
      return colors.graphite
    case 'ServerError':
      return colors.error
    case 'ServerInfo':
      return colors.teal
    case 'Channel':
      return colors.white
    case 'Emote':
      return colors.yellow
    default:
      return colors.white
  }
}

export interface MessageProps {
  message: MessageModel
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const { user, date, text, type } = message
  const { state } = useClientContext()
  const localUserId = state.client?.localUser.id
  return (
    <Wrapper>
      <Time>{date}</Time>
      {type === 'Whisper' && (
        <From>
          {'<'}From <Name isSelf={false}>{user.name}</Name>
          {'>'}
        </From>
      )}
      {type === 'Channel' && (
        <Name isSelf={user.id === localUserId}>{user.name}</Name>
      )}
      {type === 'Emote' && (
        <Name isSelf={user.id === localUserId}>{user.name}</Name>
      )}
      <Text type={type}>{text}</Text>
    </Wrapper>
  )
}

export default Message
