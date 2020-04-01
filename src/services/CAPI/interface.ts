import { UserIconProps } from '../../components/UserList/components/UserIcon'

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

  export type AllCommands = RequestCommands | ResponseCommands

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

  export interface AttributeArray {
    key: Attributes
    value: UserIconProps['type']
  }

  export interface Status {
    status?: {
      area: number
      code: number
    }
  }

  export interface Payload {
    user_id?: number
    toon_name?: string
    message?: string
    type?: MessageTypes
    flag?: Flags[]
    attribute?: AttributeArray[]
    channel?: string
  }

  export interface Data {
    command: AllCommands
    requestId: number
    payload: Payload
    status?: Status
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
  }

  // Botapichat.ConnectRequest
  export interface ConnectRequest extends BaseRequest {
    command: 'Botapichat.ConnectRequest'
  }

  // Botapichat.ConnectResponse
  export interface ConnectResponse extends BaseResponse, Status {
    command: 'Botapichat.ConnectResponse'
  }

  // Botapichat.ConnectEventRequest
  export interface ConnectEventRequest extends BaseRequest {
    command: 'Botapichat.ConnectEventRequest'
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
  export interface SendMessageRequest extends BaseRequest {
    command: 'Botapichat.SendMessageRequest'
    payload: {
      message: string
    }
  }
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
