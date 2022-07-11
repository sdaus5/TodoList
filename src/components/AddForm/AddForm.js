import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faTrashCan} from "@fortawesome/free-solid-svg-icons";

const AddForm = ({setTodos, todos, todoText, setTodoText, status, setStatus}) => {
    const formHandler = (e) => {
        e.preventDefault()
        setTodos([...todos, {text: todoText, id:todos.length === 0 ? 1 : todos[todos.length -1].id + 1, isActive: true, isDone: false, isImportant: false, isDeleted: false, isEdited: false}])
        setTodoText('')
    }
    const inputHandler = (e) => {
        setTodoText(e.target.value)
    }
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
       <div className='d-flex justify-content-between'>
           <button type='button' onClick={statusHandler} value='recycle' className={`btn btn-outline-danger  ${status === 'recycle' ? 'active' : ''}`}><FontAwesomeIcon icon={faTrashCan}/></button>
           <form className='d-flex justify-content-between' onSubmit={formHandler}>
               <input type='text' placeholder='Type what will you do' className='input' onChange={inputHandler}  value={todoText} required />
               <button type='submit' className='plus btn btn-outline-success'><FontAwesomeIcon icon={faPlus}/></button>
           </form>
       </div>
    );
};

export default AddForm;