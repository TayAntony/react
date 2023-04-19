import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const NavBar = ({dados}) => {
    const [teste, setTeste] = useState(true)
    return ( 
        <>
        <div className='bg-red-400 p-4'>
            <ul className='text-black flex w-full justify-around'>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/carrinho">Carrinho</Link></li>
                <li><Link to="/favoritos">Favoritos</Link></li>
            </ul>
        </div>
        </>

);
}
 
export default NavBar;