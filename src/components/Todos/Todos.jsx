import React from 'react';
import './todos.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Todos = () => {
    const todos = useSelector(todo => todo.todosReducer);
    
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
                                <Button variant='danger'>
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
