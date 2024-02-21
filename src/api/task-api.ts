import axios from "axios";
import {isNumberObject} from "util/types";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true
});

export const taskApi = {
    getTasks(todolistId:string) {
        return instance.get<ResponceTaskType<TaskType[]>>(`todo-lists/{todolistId}/tasks`);
    }
}

//types

export type TaskType = {
    "id": string,
    "title": string,
    "description": null | string,
    "todoListId": string,
    "order": number,
    "status": number,
    "priority": number,
    "startDate": null | number,
    "deadline": null | number,
    "addedDate": string | number
}

export type ResponceTaskType<T> = {
    "items": T,
    "totalCount": number,
    "error": null | string
}