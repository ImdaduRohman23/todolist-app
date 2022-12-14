import React from 'react';
import './header.css';
import list from '../../assets/list.gif';

const Header = () => {
    return (
        <div className="header">
            <h1 className="header__title">My Todo's</h1>
            <div className="header__content">
                <h3 className="header__content-moto">"Write it and do it!"</h3>
                <form className="header__content-form">
                        <input className='form__input' placeholder='Add todo . . .' type="text" />
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
