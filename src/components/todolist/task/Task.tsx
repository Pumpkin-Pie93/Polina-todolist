import React, {useEffect} from 'react';
import {TaskType} from "../../../api/task-api";
import {useAppDispatch} from "../../../store/store";
import {setTasks, setTasksThunk} from "../../../reducers/task-reducer";

type TasksProps = {
    todolistId: string
    tasks: TaskType[]
}

export const Tasks = (props: TasksProps) => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setTasksThunk(props.todolistId))
    }, []);

    return (
        <div>
            {props.tasks.map((t) =>
                <Task key={t.id} title={t.title}/>
            )}
        </div>
    );
}

type TaskPropsType = {
    title: string
}

const Task = (props:TaskPropsType) => {
    return <div >
        <input type="checkbox"/>
        <span>{props.title}</span>
        <button>delete</button>
    </div>
}


