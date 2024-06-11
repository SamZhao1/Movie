'use client'

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export const Login = (): JSX.Element => {
    const {data:session} = useSession();

    if(session){
        return(
            <div className="navbar-item">
                <div className="buttons">
                    <a className="button is-normal" onClick={()=> signOut()}>
                        Sign Out
                    </a>
                </div>
            </div>
        )
    }

    else {
        return(
            <div className="navbar-item">
                <div className="buttons">
                    <a className="button is-normal" onClick={()=> signIn()}>
                        Sign In
                    </a>
                </div>
            </div>
        )
    }
}