import {todolistApi, TodolistType} from "../api/todolist-api";
import {ThunkDispatch} from "redux-thunk";
import {AppRootStateType, AppThunkDispatch} from "../store/store";
import {AnyAction} from "redux";
import {Dispatch} from "react";
import {setTasks, setTasksThunk} from "./task-reducer";


const initialState:TodolistType[] = []

export const todolistReducer = (state:TodolistType[] = initialState, action:Actionstype):TodolistType[] => {
    switch (action.type) {
        case'GET-TODOLISTS':
            return [...action.data]
        default: return state
    }

}
//actions

export const getTodolists = (data: TodolistType[]) => {
    return {
        type:'GET-TODOLISTS',
        data
    } as const
}

//thunk

export const setTodo = () => (dispatch:AppThunkDispatch) => {
    todolistApi.getTodolists().then((res)=> {
        dispatch(getTodolists(res.data))
    })
}


//types

type Actionstype = ReturnType<typeof getTodolists>

