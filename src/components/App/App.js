import React, {useState, useEffect}from 'react';
import Header from "../Header";
import Panel from '../Panel';
import TodoList from  '../TodoList';
import AddForm from "../AddForm";


const App = () => {
    const [todos, setTodos] = useState([])
    const [todoText, setTodoText] = useState('')
    const [status, setStatus] = useState('all')
    const [search, setSearch] = useState('')
    const [edit, setEdit] = useState('')
    useEffect(() => {
        console.log(localStorage.getItem('array'))
        setTodos(JSON.parse(localStorage.getItem('array')))
    }, [])
    useEffect(() => {
        localStorage.setItem('array', JSON.stringify(todos))
    }, [todos])
    return ( 
        <div className='container'>
            <div className='todo-container'>
               <Header todos={todos}/>
               <Panel todos={todos} status={status} setStatus={setStatus} search={search} setSearch={setSearch}/>
               <TodoList todos={todos} setTodos={setTodos} status={status} setStatus={setStatus} search={search} setSearch={setSearch} edit={edit} setEdit={setEdit}/>
               <AddForm todos={todos} setTodos={setTodos} setTodoText={setTodoText} todoText={todoText} status={status} setStatus={setStatus}/>
            </div>
        </div>
    );
};

export default App;