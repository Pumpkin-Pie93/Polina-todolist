import {ChangeEvent, useState,KeyboardEvent} from "react";

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
        if(e.key === 'enter'){
            addItem()
        }
    }

    return (
        <div>
            <input onChange={onChangeHandler}
                   placeholder={'title'}
                   value={title}
            onKeyDown={onKeyDownHandler}>

            </input>
            <button onClick={addItem}>add</button>
        </div>

    )
}