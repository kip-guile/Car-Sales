import * as types from './actionTypes';

export function addFeature(item){
    return {type: types.ADD_FEATURE,
            payload: item}
}

export function addFeature(item){
    return {type: types.DELETE_FEATURE,
            payload: item}
}