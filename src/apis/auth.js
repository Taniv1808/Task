import { LOGIN_API, SIGNUP_API } from '../config/urls'
import {  apiPost} from '../utils/utils'

export function Login(data={}) {
    return apiPost(LOGIN_API,data)
}

export function Signup(data={}) {
    return apiPost(SIGNUP_API,data)
}