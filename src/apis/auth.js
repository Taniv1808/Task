import { LOGIN} from '../config/urls'
import { apiDelete, apiGet, apiPost, apiPut } from '../utils/utils'


export function  Login(data={}) {
    return apiPost(LOGIN,data)
}