// export { default as AuthenticateResponse } from './AuthenticateResponse'

function keyMirror(arr: string[]) {
  let tmp = Object.create(null)
  for (const value of arr) tmp[value] = value
  return tmp
}

const events = keyMirror([
  'Botapiauth.AuthenticateResponse',
  'Botapichat.ConnectResponse',
  'Botapichat.DisconnectResponse',

  // Async responses related to connection state
  'Botapichat.ConnectEventRequest',
  'Botapichat.DisconnectEventRequest',

  // General responses when server acknowledges a request
  'Botapichat.SendMessageResponse',
  'Botapichat.SendWhisperResponse',
  'Botapichat.BanUserResponse',
  'Botapichat.UnbanUserResponse',
  'Botapichat.SendEmoteResponse',
  'Botapichat.KickUserResponse',
  'Botapichat.SendSetModeratorResponse',

  // Server events that require client action
  'Botapichat.MessageEventRequest',
  'Botapichat.UserUpdateEventRequest',
  'Botapichat.UserLeaveEventRequest',
])

const handlers: { [key: string]: any } = {}

for (const name of Object.keys(events)) {
  try {
    const moduleName = name
      .replace('Botapichat.', '')
      .replace('Botapiauth.', '')
    handlers[name] = require(`./${moduleName}.ts`)
  } catch {} // eslint-disable-line no-empty
}

export default handlers
