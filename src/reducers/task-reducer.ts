import {TaskType} from "../api/task-api";

const initialState:TaskType[] = []

export const taskReducer = (state=initialState, action: ActionType) => {
    switch (action.type){
        case 'xxx':
            return {...state}
        default: return state
    }
}