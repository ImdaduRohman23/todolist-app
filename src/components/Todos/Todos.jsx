import React, { useEffect } from 'react';
import './todos.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const Todos = ({todos, setTodos}) => {
    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id != id))
    }

    return (
        <div className="todos">
            <div className="todos__container">
                {
                    todos.map(todo => (
                        <Form>
                            <div key={'checkbox'} className="mb-3 todos__content">
                                <Form.Check 
                                    type={'checkbox'}
                                    id={'checkbox'}
                                    label={todo.title}
                                />
                                <Button onClick={() => handleDelete(todo.id)} variant='danger'>
                                    Delete
                                </Button>
                            </div>
                        </Form>
                    ))
                }
            </div>
        </div>
    )
}

export default Todos
