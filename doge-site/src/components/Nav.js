import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <Navbar>
            <h1>
                <Link className='li' to='/'>
                    DOGESITE
                </Link>
            </h1>
            <Links>
                <Link className='li' to='/'>Home</Link>
                <Link className='li' to='/Breeds'>Breeds</Link>
                <Link className='li' to='/Contact'>ContactUs</Link>
            </Links>
        </Navbar>
    );
}

const Navbar = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    background: #b0d8ad;
    align-items: center;
    h1 {
        margin: 10px;
        letter-spacing: 5px;
    }
    .li {
        color: white;
        margin: 10px;
        text-decoration: none;
    }
`;

const Links = styled.ul`
    display: inline-flexbox;
    width: 100%;
    justify-content: flex-end;
`;

export default Nav;