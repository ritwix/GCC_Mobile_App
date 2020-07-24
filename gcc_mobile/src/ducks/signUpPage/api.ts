import axios from 'axios'
import { getUrl, Region } from '../../../utilities/urls'
import { upperCase } from 'lodash';

export const getUnis = (input: string) =>
    axios.get<string[]>(`${getUrl(Region.GLOBAL)}universitylist/${input}`)