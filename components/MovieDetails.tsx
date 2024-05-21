"use client";

import { forEachChild } from "typescript";
import Image from 'next/image'
import AddRemoveButton from "./AddRemoveButton";
import './MovieDetails.css';

const baseURL:string = "https://image.tmdb.org/t/p/w500/";

function MovieDetails(props:{
    details:{id:number, poster_path:string, original_title:string, overview:string, release_date:string, runtime:number, genres:[{id:number, name:string}]},
    isFav:Boolean,
    userId:number
}): JSX.Element {

    //console.log(props.details);
    //console.log(props.isFav);

    let genreList:string[] = [];

    props.details.genres.forEach(function (value) {
        genreList.push(value.name+',');
      }); 


    return (
        <div className="movieDetails">

            <div className="info">
                <img className='card-img' src={baseURL + props.details.poster_path} alt='Blank'/>
            </div>
           
            <div className="info">
                <h1 className='card-title title'>{props.details.original_title}</h1>
                <p className='card-text subtitle'>{props.details.release_date}</p>
                <p className='card-text subtitle'>{props.details.runtime} minutes</p>
                <p className='card-text subtitle'>{genreList}</p>
                <p className='card-text subtitle is-4'>{props.details.overview}</p>
            </div>

            <AddRemoveButton movieID={props.details.id} isFav={props.isFav} userId = {props.userId}/>
        </div>
    )
}

export default MovieDetails;