'use client'

import { useRouter } from 'next/navigation'
import { useSession } from "next-auth/react";

interface MovieProps{
    movieId:number,
    isFavorite:Boolean,
    userId:number
}

export const AddRemoveButton = ({movieId, isFavorite, userId}:MovieProps):JSX.Element => {

    const router = useRouter();
    const {data:session} = useSession();

    const addFav:() => Promise<void> = async () => {
        await fetch('/api/favoritesList',{
            method: 'POST',
            body: JSON.stringify({userID: userId, movieID: movieId})
        })

        router.refresh();
    } 

    const removeFav:() => Promise<void> = async () => {
        await fetch('/api/favoritesList',{
            method: 'DELETE',
            body: JSON.stringify({userID: userId, movieID: movieId})
        })

        router.refresh();
    }

    if(session){
        if(isFavorite){
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