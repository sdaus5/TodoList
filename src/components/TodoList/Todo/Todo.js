import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faPencil, faStar,  faCircleXmark, } from "@fortawesome/free-solid-svg-icons";

const Todo = ({todoObj, todos, setTodos, edit, setEdit}) => {
    const activeHandler = () => {
        setTodos(todos.map(el => el.id === todoObj.id ? {...el, isActive: !el.isActive, isDone: !el.isDone} : el))
    }
    const importantHandler = () => {
        setTodos(todos.map(el => el.id === todoObj.id ? {...el, isImportant: !el.isImportant} : el))
    }
    const deleteHandler = () => {
        setTodos(todos.map(el => el.id === todoObj.id ? {...el, isDeleted: !todoObj.isDeleted} : el))
    }
    const editHandler = () => {
        setEdit(todoObj.text)
        setTodos(todos.map(el => {
            if(todoObj.id === el.id){
               return {...el, isEdited: true}
            } else {
                return el
            }
        }))
    }
    const sumbmitHandler = (e) => {
        e.preventDefault()
        setTodos(todos.map(el => {
            if(todoObj.id === el.id){
                return {...el, isEdited: false, text: e.target.children[0].value}
            } else {
                return  el
            }
        }))
    }
    const inputHandler = (e) => {
        setEdit(e.target.value)
    }
    return (
        <li className='d-flex justify-content-between mb-2'>
            <span className={`${todoObj.isDone ? 'text-decoration-line-through' : ''} ${todoObj.isImportant ? 'text-warning' : ''} ${todoObj.isEdited ? 'd-none' : ''}`}>{todoObj.text}</span>
            <form action="" className={`${todoObj.isEdited ? 'd-block' : 'd-none'}`} onSubmit={sumbmitHandler}>
                <input type="text" placeholder='text' required value={edit} className='editInput' onChange={inputHandler}/>
                <button type="submit" className='editBtn'>Save</button>
            </form>
            <div>
                <button type='button' className={`btn btn-outline-secondary me-1 ${todoObj.isEdited ? '' : 'active'}`} onClick={editHandler}><FontAwesomeIcon icon={faPencil}/></button>
                <button type='button' className={`btn btn-outline-success me-1 ${todoObj.isActive ? '' : 'active'}`} onClick={activeHandler}><FontAwesomeIcon icon={faCheck}/></button>
                <button type='button' className={`btn btn-outline-warning me-1 ${todoObj.isImportant ? 'active' : ''}`} onClick={importantHandler}><FontAwesomeIcon icon={faStar}/></button>
                <button type='button' className={`btn btn-outline-danger me-1 ${todoObj.isDeleted ? '' : 'active'}`} onClick={deleteHandler}><FontAwesomeIcon icon={faCircleXmark}/></button>
            </div>
        </li>
    );
};

export default Todo;