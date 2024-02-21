import {ChangeEvent, useState,KeyboardEvent} from "react";
import s from './AddItemForm.module.css'
type AddItemFormProps = {
    addItem: (title:string) => void
}

export const AddItemForm = (props: AddItemFormProps) => {

    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const addItem = ()=> {
    if(title.trim() !== ''){
        props.addItem(title)
        setTitle('')
    } else {
        setError('Invalid title')
    }
}

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyDownHandler = (e:KeyboardEvent<HTMLInputElement>) => {
            setError(null)
        console.log(e.key)
            if(e.key === 'Enter'){
                addItem()
            }
    }

    return (
        <div>
            <input onChange={onChangeHandler}
                   placeholder={'title'}
                   value={title}
                   onKeyDown={onKeyDownHandler}
            className={error? s.error : ''}
            >

            </input>
            <button onClick={addItem}>add</button>
            {error && <span className={s.errorMessage}>{error}</span>}
        </div>

    )
}