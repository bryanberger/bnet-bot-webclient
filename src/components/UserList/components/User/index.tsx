import React, { useState, useEffect } from 'react'
import styled from '../../../../theme/styled'
import UserModel from '../../../../services/CAPI/models/User'
import { CAPI } from '../../../../services/CAPI/interface'

import UserIcon from '../UserIcon'

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
  const { flag, pid, name } = user
  const [iconType, setIconType] = useState<CAPI.Icons>('CHAT')

  useEffect(() => {
    if (flag.includes('Moderator')) {
      setIconType('Moderator')
    } else {
      setIconType(pid)
    }
  }, [flag, pid])

  return (
    <Wrapper>
      <UserIcon type={iconType} />
      <UserName>{name}</UserName>
      {/* <div>[latency]</div> */}
    </Wrapper>
  )
}

export default User
