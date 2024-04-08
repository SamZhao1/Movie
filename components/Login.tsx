'use client'

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Login(): JSX.Element {
    const {data:session} = useSession();

    if(session){
        return(
            <div className="navbar-item">
                <div className="buttons">
                    <a className="button is-light" onClick={()=> signOut()}>
                        Sign Out
                    </a>
                </div>
            </div>
        )
    };

    return(
        <div className="navbar-item">
            <div className="buttons">
                <a className="button is-light" onClick={()=> signIn()}>
                    Sign In
                </a>
            </div>
        </div>
    )
}

export default Login;