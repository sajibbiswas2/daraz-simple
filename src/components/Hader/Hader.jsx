import React from 'react';
import './Hader.css'
import logo from '../../imagess/images.jpeg';
const Hader = () => {
    return (
        <div className='Header'>
            <img className='logo' src={logo} alt="" />
            <div className='hader-name'>
                <a href="/shop">shop</a>
                <a href="/product">product</a>
                <a href="invantoey">invantoey</a>
                <a href="login">login</a>
            </div>
        </div>
    );
};

export default Hader;