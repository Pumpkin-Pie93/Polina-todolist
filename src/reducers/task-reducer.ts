import {taskApi, TaskType} from "../api/task-api";
import {AppThunkDispatch} from "../store/store";

const initialState:TaskType[] = []

export const taskReducer = (state=initialState, action: ActionType) => {
    switch (action.type){
        case 'SET-TASKS':
            return [...action.tasks]
        default: return state
    }
}

//actions

export const setTasks = (tasks:TaskType[]) => {
    return {
        type:'SET-TASKS',
        tasks
    } as const
}

//thunks

export const setTasksThunk = (todolistId:string) => (dispatch:AppThunkDispatch) => {
    taskApi.getTasks(todolistId)
        .then((res)=> {
            setTasks(res.data.items)
        })
}
//types

type ActionType = ReturnType<typeof setTasks>