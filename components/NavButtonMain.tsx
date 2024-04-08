'use client'

import Link from "next/link";

function NavButtonMain(): JSX.Element {

    return(
        <>
            <Link className="navbar-item" href='/'>
                Home
            </Link>
            <Link className="navbar-item" href='/top'>
                Top Rated Movies
            </Link>
            <Link className="navbar-item" href='/popular'>
                Popular Movies
            </Link>
        </>
    )
};

export default NavButtonMain;