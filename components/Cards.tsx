"use client";

import './Cards.css';

function Cards(props:{movieID: number, image:string, title:string, summary:string}): JSX.Element {

    //console.log(props.movieID);
    return (

        <div className='movie-card'>
            <a href={'/id/'+ props.movieID}>
                <img className='card-img' src={props.image} alt='NO IMAGE'></img>
            </a>
            <h1 className='card-title'>{props.title}</h1>
            <p className='card-text'>{props.summary}</p>
        </div>
    )
}

export default Cards;