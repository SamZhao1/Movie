"use client"

import 'bulma/css/bulma.min.css';

import NavButtonMain from './NavButtonMain';
import NavButtonProtected from './NavButtonProtected';
import SearchBar from './SearchBar';
import Login from './Login';

import Link from 'next/link'

function Navbar():JSX.Element {
    return (
        <div className='navbar' role='navigation' aria-label='main navigation'>
            <div id="navbarBasicExample" className='navbar-menu is-active'>
                <div className='navbar-start'>
                    <NavButtonMain/>
                    <NavButtonProtected/>
                </div>
                <div className='navbar-end'>
                    <SearchBar/>
                    <Login/>
                </div>
            </div>
        </div>
    );
  };

  export default Navbar;