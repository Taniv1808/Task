import { LOGIN_API } from '../config/urls'
import Login from '../Screens/Login/Login'
import { apiDelete, apiGet, apiPost, apiPut } from '../utils/utils'

export function  getUserProfile(query) {
    return  apiGet(LOGIN_API+query)
}
