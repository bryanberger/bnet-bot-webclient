import React from 'react'
import UserIcon from '../UserIcon'
import styled from '../../../../theme/styled'
import UserModel from '../../../../services/CAPI/models/User'

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

interface UserProps {
  user: UserModel
}

const User: React.FC<UserProps> = ({ user }) => {
  const { pid, name } = user
  return (
    <Wrapper>
      <UserIcon type='diablo2' />
      <UserName>{name}</UserName>
      {/* <div>[latency]</div> */}
    </Wrapper>
  )
}

export default User
