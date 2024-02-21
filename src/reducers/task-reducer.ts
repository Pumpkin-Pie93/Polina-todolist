import {taskApi, TaskType} from "../api/task-api";
import {AppThunkDispatch} from "../store/store";
import {GetTodolist} from "./todolist-reducer";

const initialState:TasksStateType = {}

export const taskReducer = (state=initialState, action: ActionType):TasksStateType => {
    switch (action.type){
        case 'SET-TASKS':
            return {...state, [action.todolistId]: action.tasks}
        case'GET-TODOLISTS':
            const stateCopy = { ...state }
            action.todolists.forEach(tl => {
                stateCopy[tl.id] = []
            })
                return stateCopy
        default: return state
    }
}

//actions

export const setTasksAction = (tasks:TaskType[],todolistId:string) => {
    return {
        type:'SET-TASKS',
        tasks,
        todolistId
    } as const
}

//thunks

export const setTasksThunk = (todolistId:string) => (dispatch:AppThunkDispatch) => {
    taskApi.getTasks(todolistId)
        .then((res)=> {
            dispatch(setTasksAction(res.data.items,todolistId))
        })
}
//types

type ActionType = ReturnType<typeof setTasksAction> | GetTodolist

export type TasksStateType = {
    [key: string]: Array<TaskType>
}