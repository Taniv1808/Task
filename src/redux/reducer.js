import types from "./types"

const initialState={
    list:[{
        id:0,
        name:'Hi',
        description:'Mrng',
        status:'Done',
    },
    {
        id:1,
        name:'Hello',
        description:'Evening',
        status:'Pending',

    },
    {
        id:2,
        name:'Yes',
        description:'Good Night',
        status:'Done',
    },
    {
        id:3,
        name:'Hey',
        description:'Now',
        status:'Later',
    }
]
}

export default function reducer(state = initialState, action) {
    let { list } = state
    switch (action.type) {
        case types.ADD:
            return ({
                ...state,
                list:[...list,...[{
                     id:list.length, 
                     name:action.payload.name,
                     description: action.payload.description, 
                     status: action.payload.status }]]

            })
            case types.EDIT:
                let updatedList = list.map((value, index) =>
                    value.id == action.payload.id ? value.status = action.payload.status : value
                )
                return ({
                    ...state,
                    list: updatedList
                })
                case types.DELETE:{
                    let updatedList = list.filter((value, index)=>index!=action.payload.index)
                    return({
                        ...state,
                        list: updatedList,
                    })
                }
        default:
            return state;
    }
}