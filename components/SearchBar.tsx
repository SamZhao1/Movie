'use client'

import Link from "next/link";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

function SearchBar(): JSX.Element {
    const [search, setSearch] = useState<string>('');
    const router:AppRouterInstance = useRouter();

    type handler = (event: React.FormEvent<HTMLFormElement>) => void;

    const handleSubmit:handler = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push('/search/' + search)
    }
    
    return(
        <>
            <form className='navbar-item' onSubmit={handleSubmit}>
                <input className="input is-normal" type="text" placeholder="Search Movies" value={search} onChange={(e) => {setSearch(e.target.value)}}></input>
                <button className='button is-primary' type="submit">Submit</button>
            </form>
        </>
    )
}

export default SearchBar;