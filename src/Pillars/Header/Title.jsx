import React from 'react';
import './title.css';
import logo from './img/logo.png'


const Title = () =>{
    return(
        <div className="logo-box">
            <img className="logo-icon" src={logo} alt="logo" />
        </div>
    )
}

export default Title