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
