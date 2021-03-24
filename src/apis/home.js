import { LOGIN_API, SIGNUP_API } from '../config/urls'
import { apiGet} from '../utils/utils'
import { Login } from './auth'
Login

export function  getUserProfile(query) {
    return  apiGet(LOGIN_API+query)
}
