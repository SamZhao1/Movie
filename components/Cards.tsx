"use client";

import './Cards.css';

interface MovieProps{
    movieID: number, 
    image:string, 
    title:string, 
    summary:string
}

export const Cards = ({movieID, image, title, summary}:MovieProps): JSX.Element => {

    return (
        <div className='movie-card'>
            <a href={'/id/'+ movieID}>
                <img className='card-img' src={image} alt='NO IMAGE' width="500" height="750"></img>
            </a>
            <h1 className='card-title'>{title}</h1>
            <p className='card-text'>{summary}</p>
        </div>
    )
}