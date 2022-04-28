import {ADD_WORK,DEL_WORK,EDIT_WORK } from  '../types';

export const addWork = (work) =>{
    return{
        type: ADD_WORK,
        payload: work
    }
}
export const delWork = (id) =>{
    return{
        type: DEL_WORK,
        payload:id
    }
}
export const editWork = (work) =>{
    return{
        type: EDIT_WORK,
        payload:work
    }
}