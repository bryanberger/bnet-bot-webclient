import React from 'react'
import styled from '../../../../theme/styled'
import { CAPI } from '../../../../services/CAPI/interface'

export interface UserIconProps {
  type: CAPI.Icons
}

const Wrapper = styled.div`
  display: flex;
  img {
    width: 100%;
  }
`

const UserIcon: React.FC<UserIconProps> = ({ type, ...rest }) => {
  const icon = `${process.env.PUBLIC_URL}/assets/icons/${type}.bmp`
  return (
    <Wrapper {...rest}>
      <img src={icon} alt='' />
    </Wrapper>
  )
}

export default UserIcon
