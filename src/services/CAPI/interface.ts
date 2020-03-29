export declare namespace CAPI {
  export type RequestCommands =
    | 'Botapiauth.AuthenticateRequest'
    | 'Botapichat.ConnectRequest'
    | 'Botapichat.ConnectEventRequest'
    | 'Botapichat.DisconnectRequest'
    | 'Botapichat.DisconnectEventRequest'
    | 'Botapichat.SendMessageRequest'
    | 'Botapichat.SendWhisperRequest'
    | 'Botapichat.BanUserRequest'
    | 'Botapichat.UnbanUserRequest'
    | 'Botapichat.SendEmoteRequest'
    | 'Botapichat.KickUserRequest'
    | 'Botapichat.SendSetModeratorRequest'
    | 'Botapichat.MessageEventRequest'
    | 'Botapichat.UserUpdateEventRequest'
    | 'Botapichat.UserLeaveEventRequest'

  export type ResponseCommands =
    | 'Botapiauth.AuthenticateResponse'
    | 'Botapichat.ConnectResponse'
    | 'Botapichat.DisconnectResponse'
    | 'Botapichat.SendMessageResponse'
    | 'Botapichat.SendWhisperResponse'
    | 'Botapichat.BanUserResponse'
    | 'Botapichat.SendEmoteResponse'
    | 'Botapichat.KickUserResponse'
    | 'Botapichat.SendSetModeratorResponse'

  export type MessageTypes =
    | 'Whisper'
    | 'Channel'
    | 'ServerInfo'
    | 'ServerError'
    | 'Emote'

  export type Flags =
    | 'Admin'
    | 'Moderator'
    | 'Speaker'
    | 'MuteGlobal'
    | 'MuteWhisper'

  export type Attributes = 'ProgramId' | 'Rate' | 'Rank' | 'Wins'

  // export type Games =
  //   | 'chat'
  //   | 'starcraftj'
  //   | 'starcraft'
  //   | 'broodwars'
  //   | 'diablo1'
  //   | 'diablo1sw'
  //   | 'diablo2'
  //   | 'diablo2lod'
  //   | 'warcraft2'
  //   | 'warcraft3'
  //   | 'warcraft3tft'

  export interface Status {
    status?: {
      area: number
      code: number
    }
  }

  export interface BaseRequest {
    command: RequestCommands
    request_id: number
  }

  export interface BaseResponse {
    command: ResponseCommands
    request_id: number
  }

  // Botapiauth.AuthenticateRequest
  export interface AuthenticateRequest extends BaseRequest {
    command: 'Botapiauth.AuthenticateRequest'
    payload: { api_key: string }
  }

  // Botapiauth.AuthenticateResponse
  export interface AuthenticateResponse extends BaseResponse, Status {
    command: 'Botapiauth.AuthenticateResponse'
    payload: {}
  }

  // Botapichat.ConnectRequest
  export interface ConnectRequest extends BaseRequest {
    command: 'Botapichat.ConnectRequest'
    payload: {}
  }

  // Botapichat.ConnectResponse
  export interface ConnectResponse extends BaseResponse, Status {
    command: 'Botapichat.ConnectResponse'
    payload: {}
  }

  // Botapichat.ConnectEventRequest
  export interface ConnectEventRequest extends BaseRequest {
    command: 'Botapichat.ConnectEventRequest'
    payload: {
      channel: string
    }
  }

  // Botapichat.DisconnectRequest
  export interface DisconnectRequest extends BaseRequest {
    command: 'Botapichat.DisconnectRequest'
    payload: {}
  }

  // Botapichat.DisconnectResponse
  export interface DisconnectResponse extends BaseResponse, Status {
    command: 'Botapichat.DisconnectResponse'
    payload: {}
  }

  // Botapichat.DisconnectEventRequest
  export interface DisconnectEventRequest extends BaseRequest {
    command: 'Botapichat.DisconnectEventRequest'
    payload: {}
  }

  // Botapichat.SendMessageRequest
  // Botapichat.SendMessageResponse
  // Botapichat.SendWhisperRequest
  // Botapichat.SendWhisperResponse
  // Botapichat.BanUserRequest
  // Botapichat.BanUserResponse
  // Botapichat.UnbanUserRequest
  // Botapichat.SendEmoteRequest
  // Botapichat.SendEmoteResponse
  // Botapichat.KickUserRequest
  // Botapichat.KickUserResponse
  // Botapichat.SendSetModeratorRequest
  // Botapichat.SendSetModeratorResponse
  // Botapichat.MessageEventRequest
  // Botapichat.UserUpdateEventRequest
  // Botapichat.UserLeaveEventRequest
}
