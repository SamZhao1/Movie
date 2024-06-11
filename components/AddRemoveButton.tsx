'use client'

import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react";

import { authOptions } from '../app/api/auth/[...nextauth]/route'
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export const AddRemoveButton = (props:any):JSX.Element => {

    const router: AppRouterInstance = useRouter();
    const {data:session} = useSession();

    const addFav:() => Promise<void> = async () => {
        await fetch('/api/favoritesList',{
            method: 'POST',
            body: JSON.stringify({userID: props.userId, movieID: props.movieID})
        })

        router.refresh();
    } 

    const removeFav:() => Promise<void> = async () => {
        await fetch('/api/favoritesList',{
            method: 'DELETE',
            body: JSON.stringify({userID: props.userId, movieID: props.movieID})
        })

        router.refresh();
    }

    //console.log('isFav', props.isFav);
    //console.log('Client Check:', props.userId);
    //console.log(props);

    if(session){
        if(props.isFav){
            return(
                <button onClick={removeFav}>
                    Remove from favorites
                </button>
            )
        };
    
        return(
            <button onClick={addFav}>
                    Add to favorites
            </button>
        )

    }

    else{
        return(
            <button>
                Please Login
            </button>
        )
    }
}