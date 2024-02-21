import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true
});

export const todolistApi = {
    getTodolists() {
        return instance.get<TodolistType[]>('todo-lists');
    }
}

//types

export type TodolistType = {
    id:string
    addedDate: string
    order: number
    title: string
}