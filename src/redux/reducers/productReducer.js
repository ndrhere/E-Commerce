import { ActionTypes } from "../constants/action-types";
const initialState = {
    products : []
}

export const productReducer = (state= initialState, {type, payload}) =>{

if(type === ActionTypes.SET_PRODUCTS){
    return {...state, products: payload};
}
return state;
}


export const selectedProductReducer = (state={}, {type, payload}) =>{
    if(type === ActionTypes.SELECTED_PRODUCTS){
        return {...state, ...payload};
    }else if(type===ActionTypes.REMOVE_SELECTED_PRODUCTS ){
        return {}
    }
    return state;
}