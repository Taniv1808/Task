import { reject } from "lodash";
import { INFINITE_SCROLL } from "../../config/urls";
import { apiGet } from "../../utils/utils";
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

export const infiniteScroll=(data)=>{
    return new Promise((resolve,reject)=>{
        apiGet(INFINITE_SCROLL,data).then((res)=>{
            resolve(res)
        }).catch((error)=>{
                reject(error)
        })
    })
}