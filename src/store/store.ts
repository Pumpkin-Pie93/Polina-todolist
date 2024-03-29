import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import {todolistReducer} from "../reducers/todolist-reducer";
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {taskReducer} from "../reducers/task-reducer";

export const rootReducer = combineReducers({
    todolists: todolistReducer,
    tasks: taskReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store;