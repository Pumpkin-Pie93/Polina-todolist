import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./store/store";
import {getTodolists, setTodo} from "./reducers/todolist-reducer";
import {todolistApi, TodolistType} from "./api/todolist-api";
import {AddItemForm} from "./components/AddItemForm";

function App() {

    const dispatch = useAppDispatch()
    const todolists = useAppSelector(state => state.todolists)

    useEffect(() => {
        dispatch(setTodo())
    }, [])

const addItemForm = (title: string)=> {

}
    console.log(todolists)
    return (
        <div className={'todolistWrapper'}>
            {todolists.length !== 0 ? (
                todolists.map((t: TodolistType) => (
                    <div key={t.id} className={'todolist'}>
                        <span>{t.title}</span>
                        <AddItemForm addItem={addItemForm}/>
                        <div className={'buttonContainer'}>
                            <button>All</button>
                            <button>Active</button>
                            <button>Completed</button>
                        </div>

                    </div>
                ))
            ) : (
                <div>Add todo</div>
            )}
        </div>
    );
}

export default App