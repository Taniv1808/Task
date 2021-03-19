import { LOGIN} from '../config/urls'
import {  apiPost} from '../utils/utils'

export function Login(data={}) {
    return apiPost(LOGIN,data)
}