import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Todos from '../../components/Todos/Todos';

const Home = () => {
    const initialState = JSON.parse(localStorage.getItem("todos")) || [];
    const [todos, setTodos] = useState(initialState);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    return (
        <div>
            <Header todos={todos} setTodos={setTodos} />
            <Todos todos={todos} setTodos={setTodos}/>
        </div>
    )
}

export default Home
