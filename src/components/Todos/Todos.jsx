import React from 'react';
import './todos.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const Todos = () => {
    return (
        <div className="todos">
            {/* <div className="todos__logo">V</div> */}
            <div className="todos__container">
                <Form>
                    <div key={'checkbox'} className="mb-3 todos__content">
                        <Form.Check 
                            type={'checkbox'}
                            id={'checkbox'}
                            label={`Buy a car`}
                        />
                        <Button variant='danger'>
                            Delete
                        </Button>
                    </div>
                </Form>
                <Form>
                    <div key={'checkbox'} className="mb-3 todos__content">
                        <Form.Check 
                            type={'checkbox'}
                            id={'checkbox'}
                            label={`Buy a jet`}
                        />
                        <Button variant='danger'>
                            Delete
                        </Button>
                    </div>
                </Form>
                <Form>
                    <div key={'checkbox'} className="mb-3 todos__content">
                        <Form.Check 
                            type={'checkbox'}
                            id={'checkbox'}
                            label={`Buy a house`}
                        />
                        <Button variant='danger'>
                            Delete
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Todos
