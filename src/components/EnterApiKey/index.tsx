import React, {
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  FormEvent,
} from 'react'
import styled from '../../theme/styled'
import useClientContext from '../../providers/ClientProvider/hook'
import { changeApiKey } from '../../providers/ClientProvider/actions'

const Wrapper = styled.div`
  position: fixed;
  padding: ${p => p.theme.spacing[2]}px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  z-index: 100;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.primary};
`

const Label = styled.label`
  font-size: 2rem;
  text-align: center;
  margin-bottom: ${p => p.theme.spacing[2]}px;
  color: ${p => p.theme.colors.charcoal};
`

const Input = styled.input`
  font-size: 1rem;
  width: 100%;
  border-radius: 4px;
  color: white;
  padding: ${p => p.theme.spacing[2]}px;
  margin-bottom: ${p => p.theme.spacing[1]}px;
  background-color: ${p => p.theme.colors.light};
`

const Hint = styled.p`
  color: ${p => p.theme.colors.charcoal};
`

const Form = styled.form`
  width: 100%;
  max-width: 520px;
`

const API_KEY_LENGTH = 56

const EnterApiKey = () => {
  const [apiKey, setApiKey] = useState('')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const [storage, setStorage] = useLocalStorage('cApiKey', '', { raw: true })
  const inputRef = useRef<HTMLInputElement>(null)
  const { dispatch } = useClientContext()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value)
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (apiKey.length < API_KEY_LENGTH) {
      return false
    }

    /*
      store in localStorage for now
      store in the electron store later (something more secure)
    */
    // setStorage(apiKey)

    // console.log('setStorage', apiKey)

    // set context.apiKey, this hides our overlay and keeps a local copy of the apiKey in memory
    changeApiKey(dispatch, apiKey)
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [inputRef])

  return (
    <Wrapper>
      <Label htmlFor='apiKey'>Enter your CAPI key</Label>
      <Form onSubmit={onSubmit}>
        <Input
          ref={inputRef}
          id='apiKey'
          name='apiKey'
          type='text'
          value={apiKey}
          onChange={onChange}
        />
      </Form>
      {apiKey.length >= API_KEY_LENGTH && <Hint>Press enter</Hint>}
    </Wrapper>
  )
}

export default EnterApiKey
