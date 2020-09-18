import React from 'react';
import './Todo.css'
const Todo= props=>
{
    return(
        <div className='Todo'>
            <div className={`text ${props.done && 'done'}`} onClick={props.clicked} >{
            props.title}
            </div>
        </div>
    );
}

export default Todo;