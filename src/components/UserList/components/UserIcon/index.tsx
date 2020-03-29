import React from 'react'
import styled from '../../../../theme/styled'

const Games = {
  chat: 'chat',
  operator: 'operator',
  unknown: 'unknown',
  starcraftj: 'jstr',
  starcraft: 'star',
  broodwars: 'sexp',
  diablo1: 'drtl',
  diablo1sw: 'dshr',
  diablo2: 'd2dv',
  diablo2lod: 'd2xp',
  warcraft2: 'w2bn',
  warcraft3: 'war3',
  warcraft3tft: 'w3xp',
}

export interface UserIconProps {
  type: keyof typeof Games
}

const Wrapper = styled.div`
  display: flex;
  img {
    width: 100%;
  }
`

const randomGame = (): UserIconProps['type'] => {
  const game = Object.keys(Games)[
    Math.floor(Math.random() * Object.keys(Games).length)
  ]

  if (game === 'chat' || game === 'operator' || game === 'unknown')
    return randomGame()

  return game as UserIconProps['type']
}

const UserIcon: React.FC<UserIconProps> = ({ type, ...rest }) => {
  const icon = `${process.env.PUBLIC_URL}/assets/icons/${
    Games[randomGame()]
  }.bmp`
  // const icon = `${process.env.PUBLIC_URL}/assets/icons/${Games[type]}.bmp`
  return (
    <Wrapper {...rest}>
      <img src={icon} alt='' />
    </Wrapper>
  )
}

export default UserIcon
