import React, { useState } from 'react';
import './header.css';
import list from '../../assets/list.gif';
import {v4 as uuidv4} from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const [input, setInput] = useState('');
    // const [todos, setTodos] = useState([]);
    const todos = useSelector(todo => todo.todosReducer);
    console.log('todos', todos)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // setTodos(
        //     [...todos, {
        //         id: uuidv4(),
        //         title: input,
        //         completed: false
        //     }]
        // );
        dispatch({
            type: 'ADD',
            payload: [
                ...todos, {
                    id: uuidv4(),
                    title: input,
                    completed: false
                }
            ]

        })
        setInput('');
    };

    return (
        <div className="header">
            <h1 className="header__title">My Todo's</h1>
            <div className="header__content">
                <h3 className="header__content-moto">"Write it and do it!"</h3>
                <form onSubmit={handleSubmit} className="header__content-form">
                        <input value={input} onChange={(e) => setInput(e.target.value)} className='form__input' placeholder='Add todo . . .' type="text" />
                        <button className='form__button' type='submit'>+</button>
                </form>
                <h6 className='form__buttom'>Become focused, organized, and calm. </h6>
            </div>
            <div className="header__todos">
                <img className='header__todos-img'  src={list} alt="list" />
                <h2>todo's</h2>
            </div>
        </div>
    )
}

export default Header
