import {ADD_WORK, DEL_WORK, EDIT_WORK} from "../types";

const initialState = {
    works:[]
}

export const reducer = (state = initialState, action) =>{
    switch (action.type){
        case ADD_WORK:
            return{
                ...state,
                works: [...state.works, action.payload]
            }
        case EDIT_WORK:
            return {
            ...state,
            works: state.works.map((work) => {
                return work.id === action.payload.id
                    ? {
                        ...work,
                        title: action.payload.name,
                        description: action.payload.description
                    }
                    : work;
            }),
        }
        case DEL_WORK:
            return{
                ...state,
                works: state.works.filter((el)=> el.id !==action.payload)
            }
        default: return state;
    }
}