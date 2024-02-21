import {todolistApi, TodolistType} from "../api/todolist-api";
import {AppThunkDispatch} from "../store/store";


const initialState:TodolistType[] = []

export const todolistReducer = (state:TodolistType[] = initialState, action:Actionstype):TodolistType[] => {
    switch (action.type) {
        case'GET-TODOLISTS':
            return [...action.todolists]
        default: return state
    }

}
//actions

export const getTodolists = (todolists: TodolistType[]) => {
    return {
        type:'GET-TODOLISTS',
        todolists
    } as const
}

//thunk

export const setTodo = () => (dispatch:AppThunkDispatch) => {
    todolistApi.getTodolists().then((res)=> {
        dispatch(getTodolists(res.data))
    })
}


//types
export type GetTodolist = ReturnType<typeof getTodolists>
type Actionstype = GetTodolist

