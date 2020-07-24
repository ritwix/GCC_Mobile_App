import { RemoteResource } from "../../../utilities";

export interface HelpState extends RemoteResource<string> {
    form: HelpForm
}

export interface HelpForm {
    name: string
    email: string
    query: string
}

export interface Query extends HelpForm {
    contestantId: string
}

export interface Field {
    key: keyof HelpForm
    value: string
}