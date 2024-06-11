'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'

export const SearchBar = (): JSX.Element => {
    const [searchString, setSearchString] = useState<string>('');
    const router = useRouter();

    type Handler = (event: React.FormEvent<HTMLFormElement>) => void;

    const handleSubmit:Handler = (e) => {
        e.preventDefault();
        router.push('/search/' + searchString)
    }
    
    return(
        <>
            <form className='navbar-item' onSubmit={handleSubmit}>
                <input className="input is-normal" type="text" placeholder="Search Movies" value={searchString} onChange={(e) => {setSearchString(e.target.value)}}></input>
                <button className='button is-normal' type="submit">Search</button>
            </form>
        </>
    )
}