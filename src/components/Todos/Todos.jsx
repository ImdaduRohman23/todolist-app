import React from 'react';
import './todos.css';
import list from '../../assets/list.gif';
import swal from 'sweetalert';
import { Button } from 'react-bootstrap';

const Todos = ({todos, setTodos, setEdit, setEditInput}) => {

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Todo will be deleted!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    setTodos(todos.filter(todo => todo.id !== id))
                    swal("Poof! Your todo has been deleted", {
                        icon: "success",
                });
                } else {
                    swal("Your todo is safe!");
                }
            });
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
    };

    const handleReset = () => {
        swal({
            title: "Are you sure?",
            text: "Todos will be reseted!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    setTodos([]);
                    swal("Poof! Your todos has been reseted", {
                        icon: "success",
                });
                } else {
                    swal("Your todos is safe!");
                }
            });
    };

    return (
        <div className="todos">
            <div className="todos__img">
                <h2 className='header__todos-text'>todo's</h2>
                <img className='todos__img-item'  src={list} alt="list" />
            </div>
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

                {
                    !!todos.length &&
                    <div className="todo__reset">
                        <Button onClick={handleReset} variant='danger'>RESET</Button>
                    </div>
                }
            </div>
        </div>
    )
}

export default Todos
