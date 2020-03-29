import RequestId from './helpers/RequestId'

export const AuthenticateRequest = (apiKey: string) =>
  JSON.stringify({
    command: 'Botapiauth.AuthenticateRequest',
    request_id: RequestId.id(),
    payload: {
      api_key: apiKey,
    },
  })

export const ConnectRequest = JSON.stringify({
  command: 'Botapichat.ConnectRequest',
  request_id: RequestId.id(),
  payload: {},
})
