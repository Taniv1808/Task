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
        case types.EDIT: {
            let { index} = action.payload;
            let newList = [...list];
            alert(action.payload)
            newList[index].num += 1;
            if (newList[index].num == 0) {
                newList = newList.filter((value, key) => key != index);
                return {
                    ...state,
                    list: newList,
                    count: count-1
                }
            }
            return {
                ...state,
                list: newList
            }
        }
        default :
        return{
            ...state
        }
    }
    }