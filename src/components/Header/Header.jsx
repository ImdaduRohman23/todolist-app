import React, { useEffect, useState } from 'react';
import './header.css';
import {v4 as uuidv4} from 'uuid';

const Header = ({todos, setTodos, edit, setEdit, editInput, setEditInput}) => {
    const [input, setInput] = useState('');
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map(i => (
            i.id === id ? {title, id, completed} : i
        ));
        setTodos(newTodo);
        setEdit('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!edit) {
            setTodos(
                [...todos, {
                    id: uuidv4(),
                    title: input,
                    completed: false
                }]
            );
            setInput('');
        } else {
            updateTodo(input, edit.id, edit.completed)
        };
        setEditInput(false);
    };

    useEffect(() => {
        if(edit) {
            setInput(edit.title)
        } else setInput('')
    }, [setInput, edit]);

    return (
        <div className="header">
            <h1 className="header__title">My Todo's</h1>
            <div className="header__content">
                <h3 className="header__content-moto">"Write it and do it!"</h3>
                <form onSubmit={handleSubmit} className={`header__content-form ${editInput&& `form-edit`}`}>
                        <input value={input} onChange={(e) => setInput(e.target.value)} className={`form__input ${editInput&& `form-edit`}`} placeholder='Add todo . . .' type="text" />
                        <button className='form__button' type='submit'>+</button>
                </form>
                <h6 className='form__buttom'>Become focused, organized, and calm. </h6>
            </div>
            <div className="header__todos">
                <h2 className='header__todos-text'>todo's</h2>
            </div>
        </div>
    )
}

export default Header
