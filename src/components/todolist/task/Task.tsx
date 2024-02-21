import React from 'react';

type TaskProps = {
    title: string
}

export const Task = (props:TaskProps) => {
    return (
        <div>
       <input type={"checkbox"}/>
            <span>{props.title}</span>
            <button>delete</button>
        </div>
    );
};


