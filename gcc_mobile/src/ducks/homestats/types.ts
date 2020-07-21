import { Region } from "../../../utilities/urls"
import { RemoteResource } from "../../../utilities"

export interface HomeState {
    uk: RemoteResource<Facts>
    us: RemoteResource<Facts>
    ch: RemoteResource<Facts>
    in: RemoteResource<Facts>
    pl: RemoteResource<Facts>
    ap: RemoteResource<Facts>
    gl: RemoteResource<Facts>
    fetched: boolean
}

export interface Facts {
    region: Region
    numberOfContestants: number
    leadingIndividual: string
    leadingTeam: string
}