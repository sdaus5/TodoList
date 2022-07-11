import React from 'react';
import Todo from './Todo'

const TodoList = ({todos,setTodos, status, search, edit, setEdit}) => {
    const todoFiltered = (el) => {
        if(status === 'active'){
            return todos.filter(el => el.isActive && !el.isDeleted)
        } else if(status === 'done'){
            return  todos.filter(el => el.isDone && !el.isDeleted)
        } else if(status === 'recycle') {
            return todos.filter(el => el.isDeleted)
        } else {
            return todos.filter(el => !el.isDeleted)
        }
    }
    // const filteredTodos = todos.filter(obj => !obj.isDeleted)
    return (
        <ul className='p-0 todo-list'>
            {todoFiltered().length === 0 ? <li className='text-center list-unstyled'>no more</li> :
                todoFiltered().filter(el => el.text.includes(search)).map((el, idx) => {
                return <Todo key={idx} todoObj={el} todos={todos} setTodos={setTodos} edit={edit} setEdit={setEdit}/>
            })}
        </ul>
    );
};

export default TodoList;