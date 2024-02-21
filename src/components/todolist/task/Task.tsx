import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../store/store";
import {setTasksThunk} from "../../../reducers/task-reducer";
import s from './Task.module.css'

type TasksProps = {
    todolistId: string
}

export const Tasks = (props: TasksProps) => {
    const tasks = useAppSelector(state => state.tasks)
const tasksForTodo = tasks[props.todolistId]
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setTasksThunk(props.todolistId))
    }, []);

    return (
        <div className={s.tasksWrapper}>
            {tasksForTodo.map((t) =>
                <div>
                    <input type="checkbox"/>
                    <span key={t.id} title={t.title}>{t.title}</span>
                    <button>delete</button>
                </div>
            )}
        </div>
    );
}
//
// type TaskPropsType = {
//     title: string
// }
//
// const Task = (props:TaskPropsType) => {
//     return <div >
//         <input type="checkbox"/>
//         <span>{props.title}</span>
//         <button>delete</button>
//     </div>
// }
//

