"use client"

import 'bulma/css/bulma.min.css';

import NavButtonMain from './NavButtonMain';
import NavButtonProtected from './NavButtonProtected';
import SearchBar from './SearchBar';
import Login from './Login';

import Link from 'next/link'

function Navbar():JSX.Element {


    const handler = () => {
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        
        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            if($target){
                $target.classList.toggle('is-active');
            }
            });
        });
    }

    return (
        <div className="has-navbar-fixed-top">
            <div className='navbar' role='navigation' aria-label='main navigation'>

                <a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={handler}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

                <div className='navbar-menu' id="navbarBasicExample">
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
        </div>
    );
  };

  export default Navbar;