import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <Navbar>
            <h1>
                <Link className='li' to='/'>
                    DOGSITE
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
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 3rem;
    display: flex;
    //background: #add8d2;
    background: black;
    align-items: center;
    h1 {
        font-size: 50px;
        letter-spacing: 7px;
    }
    .li {
        color: #69948e;
        margin: 20px;
        text-decoration: none;
        &:hover {
            color: #39c8eb;
        }
    }
`;

const Links = styled.ul`
    display: inline-flexbox;
    width: 100%;
    justify-content: flex-end;
`;

export default Nav;