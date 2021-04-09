import { SCROLL_API } from "../../config/urls";
import { apiGet, apiPost } from "../../utils/utils";
import types from "../types";

export function addToCart(value) {
    
    return{
        type:types.ADD_To_CART,
        payload:value,
    }
}

export function  deleteItem(index) {
    return{
        
        type:types.DELETE,
        payload:index
    } 
}

export function editItem (index) {
    return{
        type:types.EDIT,
        payload:index
    }
}

export const scrollAPI=(data)=>{
    return new Promise((resolve,reject)=>{
        apiPost(SCROLL_API,data).then((res)=>{
            resolve(res)
        }).catch((error)=>{
                reject(error)
        })
    })
}