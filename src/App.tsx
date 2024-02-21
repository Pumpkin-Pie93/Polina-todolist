import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./store/store";
import {getTodolists, setTodo} from "./todolist-reducer/todolist-reducer";
import {todolistApi, TodolistType} from "./api/todolist-api";

 function App() {

  const dispatch = useAppDispatch()
  const todolists = useAppSelector(state => state.todolists)

  useEffect(()=>{dispatch( setTodo())},[])


  console.log(todolists)
  return (
      <div className={'todolistWrapper'}>
       {todolists.length !== 0 ? (
           todolists.map((t: TodolistType) => (
               <div key={t.id} className={'todolist'}>
                <span>{t.title}</span>
               </div>
           ))
       ) : (
           <div>Add todo</div>
       )}
      </div>
  );
}

export default App