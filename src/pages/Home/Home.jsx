import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Todos from '../../components/Todos/Todos';

const Home = () => {
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [todos, setTodos] = useState(initialState);
    const [edit, setEdit] = useState(null);
    const [editInput, setEditInput] = useState(false);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    return (
        <div>
            <Header todos={todos} setTodos={setTodos} edit={edit} setEdit={setEdit} editInput={editInput} setEditInput={setEditInput}/>
            <Todos todos={todos} setTodos={setTodos} edit={edit} setEdit={setEdit} editInput={editInput} setEditInput={setEditInput}/>
        </div>
    )
}

export default Home
