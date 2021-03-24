import types from "../types"
 
const initialState={
    list:[],
    count: 0,
}

export default function reducer(state = initialState, action) {
    let  {list}=state
    switch(action.type){
        case types.ADD_To_CART:
        {
            return{
            ...state,
            list:[...list,action.payload],
            count: list.length+1
        
        }}
        case types.DELETE: 
        {
            alert('Item Deleted')
            return{
                ...state,
                list:[...list.filter(list=>list.id!=action.payload)],
                count:list.length-1
            }
        }
       case types.EDIT:{
           let newList=[...list]
           newList[id].num+=1
        return{
            ...state,
            list:newList,
            count:count+1
        }  
       }
        default :
        return{
            ...state
        }
    }
    }