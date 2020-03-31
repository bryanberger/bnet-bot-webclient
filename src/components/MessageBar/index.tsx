import React, { useRef, useState } from 'react'
import styled from '../../theme/styled'
import useClientContext from '../../providers/ClientProvider/hook'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  grid-area: messagebar;
  background-color: ${p => p.theme.colors.primary};
  padding: ${p => p.theme.spacing[1]}px ${p => p.theme.spacing[2]}px;
`

const Form = styled.form`
  width: 100%;
  height: 100%;
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.primary};
  color: white;
  font-size: 1rem;
`

const Caret = styled.div`
  margin-right: ${p => p.theme.spacing[1]}px;
  color: ${p => p.theme.colors.accent};
`

const MessageBar = () => {
  const { state } = useClientContext()
  const inputRef = useRef<HTMLInputElement>(null)
  const [message, setMessage] = useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('onSubmit')
    // if (inputRef.current) {
    //   inputRef.current.value = ''
    // }
    state.client?.sendMessage(message)
    setMessage('')
  }

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value)
  }

  return (
    <Wrapper>
      <Caret>&rarr;</Caret>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder='Message'
          ref={inputRef}
          type='text'
          value={message}
          onChange={onChange}
        />
      </Form>
    </Wrapper>
  )
}

export default MessageBar
