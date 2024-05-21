'use client'

import Link from "next/link";
import {useSession} from "next-auth/react";

function NavButtonProtected(): JSX.Element {
    const {data:session} = useSession();

    if(session){
        return(
            <>
                <Link className="navbar-item" href='/favorites'>
                    Favorites
                </Link>
            </>
        )
    }
    else
        return <></>
};

export default NavButtonProtected;