import React from 'react';
import './todos.css';

const Todos = ({todos, setTodos, setEdit, setEditInput}) => {
    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    };

    const handleCompleted = (id) => {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed}
            } else return todo
        }));
    };

    const hanldeEdit = (id) => {
        window.scrollTo(0,0);
        const findEdit = todos.find(todo => todo.id === id);
        setEdit(findEdit);
    }

    return (
        <div className="todos">
            <div className="todos__container">
                {
                    todos.map(todo => (
                        <div className="todos__content" key={todo.id}>
                            <p className={`todos__content-title ${todo.completed? `completed`:``}`}>
                                {todo.title}
                            </p>
                            <div className="todos__content-button">
                                <button className="button-complete task-button" onClick={() => handleCompleted(todo.id)}>
                                    <i className="fa fa-check-circle"></i>
                                </button>
                                <button className="button-edit task-button" onClick={() => {
                                    hanldeEdit(todo.id);
                                    setEditInput(true);
                                    }}>
                                    <i className="fa fa-edit"></i>
                                </button>
                                <button className="button-delete task-button" onClick={() => handleDelete(todo.id)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    ))
                }

                {
                    !todos.length && <h4 className='todos__empty'>You don't have todo</h4>
                }
            </div>
        </div>
    )
}

export default Todos
