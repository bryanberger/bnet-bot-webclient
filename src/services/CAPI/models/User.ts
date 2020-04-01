import { CAPI } from '../interface'

interface UserObject {
  name: string
  id: number
  flag: CAPI.Flags[]
  pid?: string
  rank?: string
  rate?: string
  wins?: string
}

class User {
  private _user: UserObject

  constructor(user: UserObject) {
    this._user = user
  }

  public get name() {
    return this._user.name
  }

  public get id() {
    return this._user.id
  }

  public get flag() {
    return this._user.flag
  }

  public get pid() {
    return this._user.pid
  }

  public get rank() {
    return this._user.rank
  }

  public get rate() {
    return this._user.rate
  }
  public get wins() {
    return this._user.wins
  }
}

export default User
