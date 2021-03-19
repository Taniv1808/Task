import { LOGIN_API } from '../config/urls'
import Login from '../Screens/Login/Login'
import { apiGet} from '../utils/utils'
Login

export function  getUserProfile(query) {
    return  apiGet(LOGIN_API+query)
}
