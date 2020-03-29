import React from 'react'
import UserIcon from '../UserIcon'
import styled from '../../../../theme/styled'

const Wrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  color: ${p => p.theme.colors.white};
`

const UserName = styled.div`
  flex: 1;
  padding-left ${p => p.theme.spacing[1]}px;
`

const User = () => {
  return (
    <Wrapper>
      <UserIcon type='diablo2' />
      <UserName>[username]</UserName>
      {/* <div>[latency]</div> */}
    </Wrapper>
  )
}

export default User
