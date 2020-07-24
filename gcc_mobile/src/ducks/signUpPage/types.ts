import { RemoteResource } from "../../../utilities";
import { Region } from "../../../utilities/urls";

export interface SignUpPageState {
    title: string,
    firstName: string,
    lastName: string,
    course: string,
    email: string,
    region: string,
    university: string,
    graduationYear: number,
    universities: RemoteResource<string[]>,
    searchResults: any
    privacyChecked: boolean
    marketingChecked: boolean
}
